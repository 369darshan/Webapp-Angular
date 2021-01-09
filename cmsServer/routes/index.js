var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/Webappdb?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' });

  mongoose.connect(db, err => {
    if (err) {
      console.error('Error!' + err);
    } else {
      console.log('Connected to mongodb');
      User.find({}, (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.send(docs);
          console.log('data:' + docs);
        }
      })
    }
  })

});

module.exports = router;
