var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var authenticate = require('./authenticate');
var config = require('./config');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const url = config.mongoUrl;

app.use(passport.initialize());


// function auth(req,res,next){
  
  //console.log(req.headers);

  //var authHeader = req.headers.authorization;
//   if(!authHeader){
//     var err = new Error('you are not authenticated');
//     res.setHeader('WWW-Authenticate','Basic');
//     err.status = 401;
//     return next(err);
//   }

//   var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
//   var username =  auth[0];
//   var password = auth[1];
//   if(username === 'admin' && password === 'password'){
//     next();
//   }
//   else{
//     var err = new Error('you are not authenticated');
//     res.setHeader('WWW-Authenticate','Basic');
//     err.status = 401;
//     return next(err);
//   }
// }

/* Basic auth method for every requests */
// function auth(req,res,next){
//   if(!req.user){
//     var err = new Error('You are not authenticated!');
//     err.status=403;
//     return next(err);

//   }else{
//     next();

//     }
//   }
// app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
