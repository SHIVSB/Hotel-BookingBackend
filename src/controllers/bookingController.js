const Booking = require("../models/booking.js");

const bookingController = {};

bookingController.bookingDetails = async(req, res) => {
    let {
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays
    } = req.body;

    try {

        const newbooking = new Booking({
            room : room.name,
            roomid : room._id,
            userid : userid,
            fromdate : fromdate,
            todate : todate,
            totalamount : totalamount,
            totaldays : totaldays,
            transactionId : "1234"
        });

        const booking = await newbooking.save();

        return res.status(200).send("Room booked successfully");
    }catch(error){
         console.log("Error in booking");   

         return res.status(500).send(error);
    }
}

module.exports = bookingController;