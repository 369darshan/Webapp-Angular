var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
const authenticate = require('../authenticate');


const db = "mongodb://localhost:27017/Webappdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password,(err, user) => {
    if (err) {
      // var err = new Error('User' + req.body.username + 'already exist!');
      // err.status = 403;
      // next(err);
      res.statusCode= 500;
      res.setHeader('Constent-Type','application/json');
      res.json({err:err});
    } else {
        // return User.create({
        // username: req.body.username,
        // password: req.body.password});
        passport.authenticate('local')(req,res,()=>{
          res.statusCode= 200;
          res.setHeader('Constent-Type','application/json');
          res.json({success: true, status: 'Registration Successful!'})
        });
    }
  });
});

router.post('/login',passport.authenticate('local'),(req,res)=>{

  var token = authenticate.getToken({_id: req.user._id});
  res.statusCode= 200;
  res.setHeader('Constent-Type','application/json');
  res.json({success: true, token:token, status: 'You are Successfully logged in!'});
})

router.get('/logout'),(req,res)=>{
  if(req.session){
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
}


module.exports = router;
