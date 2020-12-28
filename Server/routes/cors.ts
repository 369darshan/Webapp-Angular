// var express = require('express');
const cors = require('cors');
// const app = express();

const whitelist = ['http:localhost:4200','http:localhost:4201'];

var corsOptionDelegate = (req,callback)=>{
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1){
        corsOptions = {origin: true};
    }
    else{
        corsOptions={ origin: false};
    }
    callback(null,corsOptions);
}
exports.cors = cors();