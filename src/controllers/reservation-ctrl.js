const validate = require('../validation/reservation-validation');
const reservationService = require('../services/reservation-service');

async function getAllReservations(req, res) {
  try {
    const result = await reservationService.getAllReservations();
    res.status(200).json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
}

async function getSingleReservation(req, res) {
  try {
    const result = await reservationService.getSingleReservation(req.params.id);
    res.status(200).json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
}

async function createReservation(req, res) {
  const {body} = req;
  try {
    const validationError = validate.createReservation(body);
    if (validationError) {
      res.status(403).send(validationError.message);
    }
    const result = await reservationService.createReservation(body);
    res.status(200).json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getAllReservations,
  getSingleReservation,
  createReservation
};
