const mongoose = require('mongoose');
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    //_id(number)
    // name varchar
    // email varchar
    // password
    // address
    // phone
    // image
    // token
    // inserted_by
    // inserted_on
    // updated_by
    // updated_on
    // status
    // ip
    // otp
    // access_rights
    // user_type
    admin:{
        type: Boolean,
        default: false
    }
})

// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('user', userSchema, 'users');