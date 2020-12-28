import mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const User = require('../models/user');


const db = "mongodb://localhost:27017/Webappdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// router.get('/users',(req,res)=>{
//     mongoose.connect(db,err =>{
//         if(err){
//             console.error('Error!' +err);
//         }
//         else{
//             console.log('Connected to mongodb');
//             User.find({ name: 'admin'},(err,docs)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
//                     res.send(docs);
//                     console.log('data:'+docs);
//                 }
//             })
//         }
//     })
// })


router.get('/',(req,res)=>{
    res.send('Api routes');
})

router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save( (err, registeredUser)=>{
        if(err){
            console.log(err);

        }else{
            res.status(200).send(registeredUser);
        }
    })
})

router.post('/signup', (req,res,next)=>{
    User.findOne({username: req.body.username})
    .then((user)=>{
        if(user != null){
            var err = new Error('User'+req.body.username +'already exist');
            res.status(403);
            next(res);
        }
        else{
            User.create({
                username: req.body.username,
                password: req.body.password
            })
            .then((user)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json({status:'Registration Scuccessful', user: user});
            }, (err)=>next(err))
            .catch((err) => {next(err)});
        }
    })
})

router.post('/login', (req,res,next)=>{
    if(!req.session.user){
        var authHeader = req.headers.autherization;
        if(!authHeader){
            var err = new Error('You are not authenticated!')
            res.setHeader('WWW-Authenticate','Basic');
            res.status = 401;
            return next(err);
        }
    }
})

// var auth = new Buffer(authHeader.split('')[1]),'base64');
// var username = auth[0];
// var password = auth[1];

module.exports = router;
