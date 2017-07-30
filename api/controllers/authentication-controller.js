'use strict';

var Taxi = require('../models/taxi');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var db = 'mongodb://localhost/Taxidb';

mongoose.connect(db);

exports.create_driver_token = function (req, res) {
  Taxi.findOne({ name: req.body.name }, function (err, taxi) {
    var token = jwt.sign(taxi, db, { expiresInMinutes: 1440 });

    if (err) {
      throw err;
    }
    if (!taxi) {
      res.send({
        success: false,
        message: 'Failed, user not found'
      });
    }
    if (taxi.password !== req.body.password) {
      res.send({
        success: false,
        message: 'Failed, wrong password'
      });
    } else {
      res.json({
        success: true,
        message: 'Token created',
        token: token
      });
    }
  });
};
