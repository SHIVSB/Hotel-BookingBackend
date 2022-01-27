const User = require("../models/user.js");

const userController = {};

 userController.signup = async (req, res) => {

    let responseData = {
        msg : "User Creation failed",
        success : false,
        result : ""
    }

    const newuser = new User({name : req.body.name, email : req.body.email, password : req.body.password});
    try {
        const user = await newuser.save();
        responseData.msg = "User  created successfully";
        responseData.success = true;
        responseData.result = user;
        return res.status(200).send(responseData);
    }catch(err){
        console.log("error in creating user");
        return res.status(500).send(responseData);
    }
}


userController.signin = async (req, res) => {
    
    const {email, password} = req.body;

    let responseData = {
        msg : "Login Successfull",
        success : true,
        result : ""
    }

    try{
        const user = await User.findOne({email : email, password : password});

        if(user.email && user.password){
            console.log("User loggged in successfully");
            user.success = true;
            responseData.result = user;
            return res.status(200).send(responseData);
        }else{
            console.log("User login failed");
            return res.status(500).send("Login failed")
        }
        
    }catch(error){
        console.log(error);
        return res.status(500).send({error});
    }
}


module.exports = userController;
