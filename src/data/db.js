require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const bluebird = require('bluebird');
bluebird.promisifyAll(MongoClient);

const MONGO_URI = process.env.MONGO_URI;
let dbConnection;

module.exports = {
  establishConnection: function(cb) {
    MongoClient.connect(MONGO_URI)
    .then(db => {
      console.log('[OK] = Successfully Established DB Connection');
      dbConnection = db;
    })
    .catch(err => {
      throw new Error('[ERR] = Could Not Establish DB Connection');
    });
  },
  getDb: () => (dbConnection)
}
