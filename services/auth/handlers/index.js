const usersRepo = require('../../../pkg/repo/usersRepo');
const config = require('../../../pkg/config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { validate, validateCreateNewAccountRule, validateLoginRule } = require('../../../pkg/validators/userValidator/validator');
const { jwt_secret_key: JWT_SECRET, expiryTime } = config.getConfigPropertyValue("security");

const MILISECONDS = 1000;
const ONE_SECOND = 1; // in seconds
const ONE_MINUTE = 60; // in seconds
const ONE_HOUR = ONE_MINUTE * 60; // in minutes
const ONE_DAY = ONE_HOUR * 24; // in hours
// default to 1d expiration of token if it's not set in the config

const timePeriodDictionary = {
    'd': ONE_DAY,
    'm': ONE_MINUTE,
    's': ONE_SECOND,
    'h': ONE_HOUR
}

const calculateExpiryTime = () => {
    const timePeriod = timePeriodDictionary[expiryTime.charAt(expiryTime.length - 1)];
    const numberOfTime = expiryTime.substring(0, expiryTime.length - 1);
    return timePeriod * numberOfTime;
}
const TIME_TO_LIVE = expiryTime != null ? calculateExpiryTime() : ONE_DAY;



const login = async ({ body }, response) => {
    try {
        await validate(body, validateLoginRule);

        let account = await usersRepo.findAccountByEmail(body.email);

        if (account == null) {
            throw {
                status: 404,
                message: 'User not found'
            };
        }

        if (!bcrypt.compareSync(body.password, account.password)) {
            throw {
                status: 404,
                message: 'User not found'
            };
        }

        const payloadData = {
            firstName: account.firstName,
            lastName: account.lastName,
            email: account.email,
            exp: getExpiryDateForToken()
        };

        const encodedToken = jwt.sign(payloadData, JWT_SECRET);

        return response.status(200).send({ token: encodedToken, user: account });
    } catch (err) {
        return response.status(err.status).send(err.message);
    }
};

const updateUser = async({ body }, response) => {
    try {
        let updatedUser = await usersRepo.updateAccount(body.id, body);
        console.log(updatedUser);
        if (!updatedUser) {
            throw {
                status: 404,
                message: 'User not found'
            };
        }
        return response.status(200).send({ user: updatedUser});
    } catch (err) {
        return response.status(err.status).send(err.message);
    }
}

const logout = async (request, response) => {
    // try {
    //     // const authHeader = req.headers["authorization"];
    //     // jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    //     //     if (logout) {
    //     //         console.log(logout);
    //     //         response.send({ msg: 'You have been Logged Out' });
    //     //     } else {
    //     //         console.log(logout);
    //     //         response.send({ msg: 'Error' });
    //         }
    //     })
    // } catch (err) {
    //     return response.status(err.status).send(err.message);
    // }
};

const register = async ({ body }, response) => {
    try {
        await validate(body, validateCreateNewAccountRule);
        let account = await usersRepo.findAccountByEmail(body.email);

        if (account != null) {
            throw {
                status: 400,
                message: 'User already exists'
            }
        }

        body.password = bcrypt.hashSync(body.password);

        let result = await usersRepo.createAccount(body);
        return response.status(200).send(result);
    } catch (err) {
        return response.status(err.status).send(err.message);
    }
};
const refreshToken = (request, response) => { };
const forgotPassword = (request, response) => { };
const resetPassword = (request, response) => { };

const getExpiryDateForToken = () => Math.floor(new Date().getTime() / MILISECONDS + TIME_TO_LIVE);

module.exports = {
    login,
    logout,
    register,
    refreshToken,
    forgotPassword,
    resetPassword,
    updateUser
}