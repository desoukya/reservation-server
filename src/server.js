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

// Create HTTP Server and Listen for Requests
app.listen(PORT, function(req, res) {
  console.log(`[OK] = HTTP Web Server Running On Port ${PORT}`);
  
  // initiate database connection
  db.establishConnection();

  // register API Endpoints
  require('./routes')(app);
});
