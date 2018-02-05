const  Joi = require('joi');

var reservationValidation = {

  /**
  * Validation for creating new reservation
  * @return null if validation passes otherwise a validation error
  */
  createReservation(reservation) {
    console.log('validation createReservation =>', reservation);
    var schema = Joi.object().keys({
      name: Joi.string().required(),
      hotelName: Joi.string().required(),
      arrivalDate: Joi.string().required(),
      departureDate: Joi.string().required()
    }).required();
    return Joi.validate(reservation, schema).error;
  },

};

module.exports = reservationValidation;
