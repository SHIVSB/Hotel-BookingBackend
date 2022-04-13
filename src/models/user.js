const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
});

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;