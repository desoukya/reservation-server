'use strict';

const reservationData = require('../data/reservation-data');
const _ = require('lodash');

async function getAllReservations() {
  return await reservationData.getAllReservations();
}

async function getSingleReservation(id) {
  if (_.isNil(id)) {
    throw new Error('A reservation id must be provided to retrieve a single reservation')
  }
  return await reservationData.getSingleReservation(id);
}

async function createReservation(reservation) {
  return await reservationData.createReservation(reservation);
}

module.exports = {
  getAllReservations,
  getSingleReservation,
  createReservation
};
