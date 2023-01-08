const mongoose = require('mongoose');

const user = mongoose.model(
    "user",
    {
        firstName:  {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        dateOfBirth: {type: Date, required: true},
        password:{type: String, required: true},
        recipes:  [{type: String, required: false}]
        
    }
);

module.exports = user;
   
