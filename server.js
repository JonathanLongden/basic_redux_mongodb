const express = require('express');
const expressSession = require("express-session");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const http = require('http'); 
const app = require("express")(); 

app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
app.use(express.static(__dirname+'/public'));

var server = require('http').Server(app);
const router = express.Router()

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({ secret: "BigFish" }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
} else {
  app.use(express.static('public'));
}

const port = process.env.PORT || 5000;

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
  res.sendStatus(200);
  } else {
  next();
  }
  };
  
app.use(allowCrossDomain);

const mailController = require('./contoller/mailController');


//This was only used as a Test
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


//request -req
//response - res
router.post('/contact/email', mailController.sendMail);

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






//always at the end of functional code
app.listen(port, () => console.log(`Listening on port ${port}`));


