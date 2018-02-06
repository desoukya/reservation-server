const reservationsCtrl = require('../controllers/reservation-ctrl');

module.exports = function(app) {
  app.get('/api/v1/reservations', reservationsCtrl.getAllReservations);
  app.get('/api/v1/reservation/:id', reservationsCtrl.getSingleReservation);
  app.post('/api/v1/reservation', reservationsCtrl.createReservation);
};
