// var express = require('express');
// const bodyParser = require('body-parser');
var User = require('../models/user');
var passport =  require('passport');

var router = express.Router();
router.use(bodyParser.json());

router.get('/',(req,res,next)=>{
    res.send('respond with a resource');

})
router.post('/signup',(req,res,next)=>{
    User.register({username: req.body.username})
    .then((user)=>{
        if(user != null){
            var err= new Error('User' + req.body.username+'alredy user exist')
        }
    })
})
