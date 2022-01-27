const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://ShivanshuPanwar:jE6nW4Vb5rJWJm4@cluster0.e14ml.mongodb.net/hotel?retryWrites=true&w=majority';

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser : true});

var connection = mongoose.connection;


connection.on('error', () => {
    console.log("mongoDB connection failed");
})

connection.on('connected', () => {
    console.log("mongoDB connection successfull");
})

module.exports = mongoose;