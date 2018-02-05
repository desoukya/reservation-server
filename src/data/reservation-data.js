'use strict';

const db = require('./db');

async function getAllReservations() {
  return await db.getDb().collection('reservations').find().toArray();
}

async function getSingleReservation(_id) {
  return await db.getDb().collection('reservations').findOne({_id});
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
