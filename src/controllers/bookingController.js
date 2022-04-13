const Booking = require("../models/booking.js");
const moment = require("moment");
const Room = require("../models/room.js");

const bookingController = {};

bookingController.bookingDetails = async (req, res) => {
  let { room, userid, fromdate, todate, totalamount, totaldays } = req.body;

  try {
    const newbooking = new Booking({
      room: room.name,
      roomid: room._id,
      userid: userid,
      fromdate: fromdate,
      todate: todate,
      totalamount: totalamount,
      totaldays: totaldays,
      transactionId: "1234",
    });

    const booking = await newbooking.save();

    const roomtemp = await Room.findOne({ _id: room._id });

    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: fromdate,
      todate: todate,
      userid : userid,
      status : booking.status
    });

    await roomtemp.save();

    return res.status(200).send("Room booked successfully");
  } catch (error) {
    console.log("Error in booking");

    return res.status(500).send(error);
  }
};


bookingController.getbookingbyuserid = async(req, res) => {
    const userid = req.body.userid;

    try{
        const bookings = await Booking.find({userid : userid});

        return res.status(200).send(bookings);
    }catch(error){
        return res.status(500).send(error);
    }

}

bookingController.cancelbooking = async(req, res) => {

    let {bookingid, roomid} = req.body;

    try {
        const bookingitem = await Booking.findOne({_id : bookingid});

        bookingitem.status = 'cancelled';

        await bookingitem.save();

        const room = await Room.findOne({_id: roomid});

        const bookings = room.currentbookings;

        const temp = bookings.filter(booking => {
            booking.bookingid.toString() !== bookingid
        })

        room.currentbookings = temp;

        await room.save();

        return res.send("Your booking cancelled successfully");
    }catch(error){
        return res.status(500).send("Booking couldn't be cancelled");
    }
}

bookingController.allbookings = async(req, res) => {

    try{
        const data = await Booking.find({});

        return res.status(200).send(data);
    }catch(error){
        console.log(error);

        return res.status(500).send("Error in fetching booking details");
    }
}

module.exports = bookingController;
