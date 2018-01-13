var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var ensureLogin = require('connect-ensure-login');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var multer = require('multer');
var bcrypt = require('bcrypt');
var cors = require('cors');
var http = require('http');
var session = require('express-session');
var authRoutes = require('./routes/auth-routes');
var userRoute = require('./routes/user');
var classRoutes = require('./routes/classes');
var chatRoutes = require('./routes/chat');
var socket = require('socket.io');
require('./configs/database');
require('./configs/multer');
require('./configs/passport');


mongoose.connect(process.env.MONGODB_URI);

var app = express();
app.use(cors({
  credentials:true,
  origin: ['http://localhost:4200']
}));

//Socket Conection



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use (
  session({
    secret: "This is a secret",
    resave: true,
    saveUninitialiazed: true

  })
);

app.use(passport.initialize());
app.use(passport.session());



app.use('/', authRoutes);
app.use('/user', userRoute);
app.use('/classes', classRoutes);
app.use('/chat', chatRoutes);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
