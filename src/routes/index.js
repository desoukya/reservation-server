const reservationsCtrl = require('../controllers/reservation-ctrl');

module.exports = function(app) {
  app.get('/reservations', reservationsCtrl.getAllReservations);
  app.get('/reservation/:id', reservationsCtrl.getSingleReservation);
  app.post('/reservation', reservationsCtrl.createReservation);
};
