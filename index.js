var createError = require('http-errors');
var express = require('express');
const PORT = 4000 || process.env.PORT;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var dbConfig = require("./src/services/dbConfig");


var apiRouter = require('./routes/api');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', apiRouter);


app.listen(PORT, function(err){
    if(err){
        console.log("Error in starting server ..");
    }

    console.log(`Server started successfully on PORT : ${PORT}`);
})
