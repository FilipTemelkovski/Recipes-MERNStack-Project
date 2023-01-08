const AccountModel = require('../model/users');

const deleteAccount = async (idToFilterBy) => { 
    return await AccountModel.deleteOne({_id: idToFilterBy});
};
const updateAccount = async (idToFilterBy, newAccount) => { 
    return await AccountModel.updateOne({_id: idToFilterBy }, newAccount);
};
const findAccountByID = async (idToFilterBy) => { 
    return await AccountModel.findById({_id: idToFilterBy});
};
const findAccountByEmail = async (emailToFilterBy) => { 
    const filterByObject = { email: emailToFilterBy };
    return await AccountModel.findOne(filterByObject);
};

const getAllAccounts = async () => { 
    return await AccountModel.find({})
};
const createAccount = async (accountToBeSaved) => { 
    const newAccount = new AccountModel(accountToBeSaved); 
    return await newAccount.save();
};


module.exports = {
    createAccount,
    deleteAccount,
    updateAccount,
    findAccountByID,
    getAllAccounts,
    findAccountByEmail
}