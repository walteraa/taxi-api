'use strict';

var taxis = require('../controllers/taxis-controller');
var auth = require('../controllers/authentication-controller');

module.exports = function (app) {
  app.route('/api/auth')
    .post(auth.create_driver_token);
  app.route('/api/taxis')
    .get(taxis.list_taxis)
    .post(taxis.create_taxi);
  app.route('/api/update')
    .post(taxis.update_location);
};
