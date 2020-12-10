var config = require("./config");
var path = require("path");
const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();

const bodyParser = require('body-parser');
const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', api);

app.get('/users', (req, res) => {
      res.send('hello server');
      api.User.find({}, (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          console.log('data:' + docs);
        }
      })

    })

      // app.use((req, res, next)=>{
      //   res.header('Access-Control-Allow-Origin','*');
      //   res.header('Access-Control-Allow-Headers','Origin ,X-Requested-With, Content-Type, Accept');
      //   res.header('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, DELETE')
      //   if('OPTIONS'== req.method){
      //       res.sendStatus(200);
      //   }else{
      //       console.log('${req.ip} ${req.method} ${req.url}');
      //       next();
      //   }

      // });


      app.listen(4201, '127.0.0.1', function () {
        console.log('Sever running at: http://' + config.hostname + ':' + config.PORT)
      })

      // const dbName = 'Webappdb';

      // // Use connect method to connect to the server
      // MongoClient.connect(url, function(err, client) {
      //   assert.equal(null, err);
      //   console.log("Connected successfully to mongo server");

      //   const db = client.db(dbName);

      //   db.collection('users').find().toArray(function (err, result) {
      //     if (err) throw err

      //     console.log(result)
      //     app.get('/users',(req, res)=>{
      //         res.send([{message: result}]);
      //     })
      //   })

      //   client.close();
      // });

      // mongoose.connect('mongodb://localhost:27017/Webappdb', {useNewUrlParser: true});

      // const db = mongoose.connection;
      // db.on('error', console.error.bind(console, 'connection error:'));
      // db.once('open', function() {
      //   // we're connected!
      //   console.log("Connected successfully to mongo server");
      // });

      // const collection = db.collection("users");
      // collection('users').find({}).toArray((err,docs)=>{
      //   assert.equal(err,null);
      //   console.log(docs);
      // })
      // const userSchema = new mongoose.Schema({
      //   name: String,
      //   email: String,
      //   pass: String
      // });

      // const user = mongoose.model('user', userSchema);

      // find each user with a last name matching 'Ghost', selecting the `name` and `occupation` fields
      // user.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, user) {
      //   if (err) return (err);
      //   // Prints "Space Ghost is a talk show host".
      //   console.log('%s %s is a %s.', user.name, user.email,
      //     user.pass);
      // });
