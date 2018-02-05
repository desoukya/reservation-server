// Load Environment Variables
require('dotenv').config()
const PORT = process.env.PORT;

// Import Modules
const express = require('express');
const app = express();
const db = require('./data/db');

// Parse request bodies in middleware before handlers
const bodyParser  = require('body-parser');
app.use(bodyParser.json());

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Create HTTP Server and Listen for Requests
app.listen(PORT, function(req, res) {
  console.log(`[OK] = HTTP Web Server Running On Port ${PORT}`);
  
  // initiate database connection
  db.establishConnection();

  // register API Endpoints
  require('./routes')(app);
});
