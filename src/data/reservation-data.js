'use strict';

const db = require('./db');
const ObjectID = require('mongodb').ObjectID;

async function getAllReservations() {
  return await db.getDb().collection('reservations').find().toArray();
}

async function getSingleReservation(id) {
  return await db.getDb().collection('reservations').findOne({_id: ObjectID(`${id}`)});
}

async function createReservation(reservation) {
  return await db.getDb().collection('reservations').insertOne(reservation)
  .then(result => {
    return result.ops[0]; // return the new inserted document
  });
}

module.exports = {
  getAllReservations,
  getSingleReservation,
  createReservation
};
