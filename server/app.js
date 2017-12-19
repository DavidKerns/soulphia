var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var ensureLogin = require('connect-ensure-login');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var multer = require('multer');
var bcrypt = require('bcrypt');
var cors = require('cors');
var session = require('express-session');
var index = require('./routes/index');
var authRoutes = require('./routes/auth-routes');
var userRoute = require('./routes/user');
var classRoutes = require('./routes/classes');

require('./configs/database');
require('./configs/multer');
require('./configs/passport');

var app = express();
app.use(cors());

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
passport.use('local-signup', new LocalStrategy(
  { passReqToCallback: true },
  (req, username, password, next) => {
    console.log("req.body````````",req.body);
    process.nextTick(() => {
        User.findOne({
            'username': username
        }, (err, user) => {
            if (err){ return next(err); }

            if (user) {
                return next(null, false);
            } else {
                // Destructure the body
                const { username, email, position, address, password } = req.body;
                const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                const newUser = new User({
	                 // required stuff: email and password
	                  username: req.body.username,
	                  password: hashPass,
	                   // anything extra goes in here too

	                    email   : req.body.email,
	                    position: req.body.position,
                      role: req.body.role,

                    });

newUser.save((err) => {
	if (err){ next(err); }
	return next(null, newUser);
});

                newUser.save((err) => {
                    if (err){ next(err); }
                    return next(null, newUser);
                });
            }
        });
    });
}));

passport.use('local-login', new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', index);
app.use('/', authRoutes);
app.use('/user', userRoute);
app.use('/classes', classRoutes);


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
