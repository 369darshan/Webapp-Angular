import mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
var passport =  require('passport');
var User = require('../models/user');
const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

const db = "mongodb://localhost:27017/Webappdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

usersRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res)=>{
    mongoose.connect(db,err =>{
        if(err){
            console.error('Error!' +err);
        }
        else{
            console.log('Connected to mongodb');
            User.find({},(err,docs)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send(docs);
                    console.log('data:'+docs);
                }
            })
        }
    })
})

.post((req,res,next)=>{
    User.register({username: req.body.username})
    .then((user)=>{
        if(user != null){
            var err= new Error('User' + req.body.username+'alredy user exist')
        }
    })
})

.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Not supported');

})

.delete((req,res,next)=>{
    res.end('deleting all users.');
});

// router.post('/User', async function (req: Request, res: Response, next: NextFunction) {
//     try {
//      // const repository = await getUserRepository();
//       const User = new User();
//       User.name = req.body.name;
//      // User.sku = req.body.sku;
//      // User.description = req.body.description;
//       User.price = Number.parseFloat(req.body.price);
//       User.stock = Number.parseInt(req.body.stock);
  
//       const result = await repository.save(User);
//       res.send(result);
//     }
//     catch (err) {
//       return next(err);
//     }
//   });

module.exports = usersRouter;