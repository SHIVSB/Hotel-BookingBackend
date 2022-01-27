const express = require("express");
var router = express.Router();
// const Room = require("../../../src/models/room.js");
// const User = require("../../../src/models/user.js");
const userController = require("../../../src/controllers/userController.js");
const roomController = require("../../../src/controllers/roomController.js");
const bookingController = require("../../../src/controllers/bookingController.js");


router.post("/getallrooms", roomController.getallrooms);
router.post("/getroombyid", roomController.getroombyid);
router.post("/signup", userController.signup);
router.post("/login", userController.signin);
router.post("/bookings/bookroom", bookingController.bookingDetails);
router.post("/getbookingbyuserid", bookingController.getbookingbyuserid);
router.post("/cancelbooking", bookingController.cancelbooking);

// router.post("/getallrooms", async(req, res) => {

//     try{
//         const rooms = await Room.find({});
//         return res.json({ rooms });
//     } catch(error){
//         return res.status(400).json({message : error})
//     }

// });

// router.post("/getroombyid", async(req, res) => {

//     let data = req.body.roomid;

//     try{
//         const room = await Room.findOne({_id: data});
//         return res.send(room);
//     } catch(error){
//         return res.status(400).json({message : error})
//     }

// });

// router.post("/register" , async(req, res) => {

//     let responseData = {
//         msg : "User Creation failed",
//         success : false,
//         result : ""
//     }

//     const newuser = new User({name : req.body.name, email : req.body.email, password : req.body.password});
//     try {
//         const user = await newuser.save();
//         responseData.msg = "User  created successfully";
//         responseData.success = true;
//         responseData.result = user;
//         return res.status(200).send(responseData);
//     }catch(err){
//         console.log("error in creating user");
//         return res.status(500).send(responseData);
//     }
// })


// router.post("/login", async(req, res) => {
    
//     const {email, password} = req.body;

//     let responseData = {
//         msg : "Login Successfull",
//         success : true,
//         result : ""
//     }

//     try{
//         const user = await User.findOne({email : email, password : password});

//         if(user.email && user.password){
//             console.log("User loggged in successfully");
//             user.success = true;
//             responseData.result = user;
//             return res.status(200).send(responseData);
//         }else{
//             console.log("User login failed");
//             return res.status(500).send("Login failed")
//         }
        
//     }catch(error){
//         console.log(error);
//         return res.status(500).send({error});
//     }
// })


module.exports = router;

