const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        reuired : true
    },
    email : {
        type : String,
        reuired : true
    },
    password : {
        type : String,
        reuired : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
} , {
    timestamps : true
})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;