const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const whitelist = ['http://localhost:4200','http://localhost:3000'];

// app.options(['http://localhost:4200','http://localhost:3000'], (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.sendStatus(200);
// });

// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Oringin","*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//       res.sendStatus(200);
//   })
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
exports.corsWithOptions = cors(corsOptionDelegate);