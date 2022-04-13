const Room = require("../models/room.js");

const roomController = {};

roomController.getallrooms = async(req, res) => {

    let responseData = {
        msg : "Room details couldn't be fetched",
        success : false,
        result : ""
    }

    try{
        const data = await Room.find({});
        console.log("Room details fetched successfully");

        responseData.msg = "Room details fetched successfully";
        responseData.success = true;
        responseData.result = data

        return res.status(200).send(responseData);
    }catch(error){
        console.log("Error in fetching room details");
        return res.status(500).send(responseData);
    }
}

roomController.getroombyid = async(req, res) => {
    let data = req.body.roomid;

    let responseData = {
        msg : "Room details couldn't be fetched",
        success : false,
        result : ""
    }

    try{
        const room = await Room.findOne({_id : data});
        console.log("Room details fetched successfully");

        responseData.msg = "Room details fetched successfully";
        responseData.success = true;
        responseData.result = room

        return res.status(200).send(responseData);
    }catch(error){
        console.log("Error in fetching room details");
        return res.status(500).send(responseData);
    }
}

roomController.addroom = async(req, res) => {
    try{
        const newroom = new Room(req.body);

        await newroom.save();
        return res.status(200).send("New room added successfully");
    }catch(error){
        return res.status(500).send("Error in adding the room");
    }
}


module.exports = roomController;