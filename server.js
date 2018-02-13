const express = require('express');
const expressSession = require("express-session");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const http = require('http'); 
const app = require("express")();
var config = require('./config.js');

app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
app.use(express.static(__dirname+'/public'));

var server = require('http').Server(app);
const router = express.Router();

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({ secret: "BigFish" }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
} else {
  app.use(express.static('public'));
}


// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   // intercept OPTIONS method
//   if ('OPTIONS' == req.method) {
//   res.sendStatus(200);
//   } else {
//   next();
//   }
//   };
  
// app.use(allowCrossDomain);

//const mailController = require('./contoller/mailController');


//This was only used as a Test
router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


//request -req
//response - res
//router.post('/contact/email', mailController.sendMail);

// app.post('/contact/email', (req, res) => {
//   //console.log(response);
//   var data = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     message: req.body.message
//   };

//   if(req.body){
//     console.log(req.body.firstName);
//   }

//   res.send({ express: req.body});
// });

app.use(router)
//This was only used as a Test
router.get('/api/hello', (req, res) => {
  req.send({ express: 'Hello From Express' });
});

var monsterControl = require('./controller/monsterController');


//POST -- Create
//GET  -- Read
//PUT  -- Update/Replace
//Patch -- Update/Modify
//Delete -- Delete


app.get('/monster', monsterControl.read);
router.post('monster', monsterControl.createbyself);//createbyself
app.get('/monster/:id', monsterControl.readById);
app.get('/monster', monsterControl.readByUser);
app.put('/monster/:id', monsterControl.update);
app.delete('/monster/:id', monsterControl.delete);


// var Monster = new monsterModel(req.body);
//         console.log(Monster);

//         Monster.save(function(err, result) {
//             if (err) {
//                 res.send(err);
//             }
//             //add sale id to req
//             req.id = result._id;
//             //call userControl.addSale

//             console.log(req.user);
//             next();

//         });

// mongoose.connect(config.mongolab_uri, function(err) {
//   if (err) throw err;
// });
mongoose.connect(
  //"mongodb://localhost:27017/sales"
  config.mongolab_uri
);

mongoose.connection.once('open', function() {
  console.log('We have data');
});
// mongoose.connect(config.mongolab_uri, function(err) {
//     if (err) throw err;
// });

//always at the end of functional code
app.listen(config.port, () => console.log(`Listening on port ${config.port}`));


