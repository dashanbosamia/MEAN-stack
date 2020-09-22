// Require application dependencies
const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')

// Create our app by calling the express function
const app = express();



// Register a route handler for GET requests made to /hello
app.get('/hello', (req, res) => {
  res.send('hello world');
});

// Get port from environment or default to port 3000.
const port = process.env.PORT || 3000;
console.log("first")
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json())
 
//using cors
app.use(cors())


app.use(function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data');

  if (req.method == 'OPTIONS') {
      res.status(200).end();
  } else {
      next();
  }
});


app.use('/api/', require('./route/route')(express));    //Parent routing setup file calll
require('./db/db');  ///db file Config

// Ask our app to listen on the calculated port.
app.listen(port, () => {
  console.log(`Successfully express js server listening on port ${port}`);
});
