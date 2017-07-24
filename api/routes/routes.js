'use strict';

var taxis = require('../controllers/taxis-controller');

module.exports = function (app) {
  app.route('/taxis')
    .get(taxis.list_taxis)
    .post(taxis.create_taxi);
  app.route('/update')
    .post(taxis.update_location);
};
