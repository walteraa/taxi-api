'use strict'
module.exports = function(app){
  var taxis = require('../controllers/taxis-controller');

  app.route('/taxis')
    .get(taxis.list_taxis)
    .post(taxis.create_taxi);
  app.route('/update')
    .post(taxis.update_location);
}
