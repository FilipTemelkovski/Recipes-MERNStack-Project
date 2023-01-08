const { Validator } = require('node-input-validator');

const validateCreateNewAccountRule = {
        firstName: "required|string|minLength:2",
        lastName: "required|string|minLength:2",
        dateOfBirth: "required",
        email: "required|email",
        password: "required|string|minLength:3"  
    };

const validateLoginRule = {
        email: "required|email",
        password: "required|string|minLength:3"
    };


const validate = async (requestBody, ruleToValidateBy) => {
    const v = new Validator(requestBody, ruleToValidateBy);

    const matched = await v.check();

    if(!matched) {
        throw {
            status: 400,
            message: v.errors
        }
    }
};

module.exports = {
    validate,
    validateCreateNewAccountRule,
    validateLoginRule
}