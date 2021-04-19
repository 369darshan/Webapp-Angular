const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const usersRouter = express.Router();
const cors = require('./cors');
const mongoose = require('mongoose');
const passport = require('passport');

const authenticate = require('../authenticate');

usersRouter.use(bodyParser.json());

const db = "mongodb://localhost:27017/Webappdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

/* GET users listing. */
usersRouter.route('/')
  .options(cors.corsWithOptions, /*(req, res) => { res.sendStatus(200); }*/ )
  .get(cors.cors, (req, res, next) => {
    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) {
        console.error('Error!' + err);
      } else {
        User.find({})
          .then((resp) => {
            console.log('Connected to mongodb');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
          }, (err) => next(err))
          .catch((err) => next(err))

      }
    })
  }),
  usersRouter.route('/:id')
  .options(cors.corsWithOptions, /*(req, res) => { res.sendStatus(200); }*/ )
  .get(cors.cors, (req, res, next) => {
    // let Id = req.params.id;
    mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true }, (err) => {
      if (err) {
        console.error('Error!' + err);
      } else {
        User.findById({_id: req.params.id})
          .then((resp) => {
            console.log('Connected to mongodb:');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
            console.log(resp);
          }, (err) => next(err))
          .catch((err) => next(err))

      }
    })
  
  

  // usersRouter.route('/')
  // .options(cors.corsWithOptions, /*(req, res) => { res.sendStatus(200); }*/ )
  // .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  //   User.register(new User({
  //       username: req.body.username
  //     }),
  //     req.body.password, (err, user) => {
  //       if (err) {
  //         // var err = new Error('User' + req.body.username + 'already exist!');
  //         // err.status = 403;
  //         // next(err);
  //         res.statusCode = 500;
  //         // res.setHeader('Constent-Type', 'application/json');
  //         res.json({
  //           err: err
  //         });
  //       } else {
  //         // return User.create({
  //         // username: req.body.username,
  //         // password: req.body.password});
  //         passport.authenticate('local')(req, res, () => {
  //           res.statusCode = 200;
  //           res.setHeader('Constent-Type', 'application/json');
  //           res.json({
  //             success: true,
  //             status: 'Registration Successful!'
  //           })
  //         });
  //       }
  //     });
  // })

// .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
//   res.statusCode = 403;
//   res.end('Not supported');

// })

// .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
//   User.remove({})
//     .then((resp) => {
//       res.statusCode = 200;
//       // res.setHeader('Constent-Type', 'application/json');
//       // res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
//   // res.end('deleting all users.');
// });

/*  usersRouter.route('/:id')
    .options(cors.corsWithOptions, (req, res) => {
      res.sendStatus(200);
    })
    .get(cors.cors,(req, res, next) => {
      User.findById(req.params.id)
        .then((user) => {
          res.statusCode = 200;
          // res.setHeader('Content-Type', 'application/json');
          // res.json(user);
        }, (err) => next(err))
        .catch((err) => next(err));
    });*/


// .post(cors.corsWithOptions, authenticate.verifyUser,(req,res)=>{

//   var token = authenticate.getToken({_id: req.user._id});
//   res.statusCode= 200;
//   //res.setHeader('Constent-Type','application/json');
//   res.json({success: true, token:token, status: 'You are Successfully logged in!'});
// })

// .get((req,res)=>{
//   if(req.session){
//     req.session.destroy();
//     res.clearCookie('session-id');
//     res.redirect('/');
//   }
// })

})
module.exports = usersRouter;
