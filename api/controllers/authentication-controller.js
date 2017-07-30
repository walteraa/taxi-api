'use strict';
var Taxi = require('../models/taxi');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var db = 'mongodb://localhost/Taxidb';
mongoose.connect(db);

exports.create_token = function (req, res) {
  Taxi.findOnde({
    name: req.body.name
  }, function(err, taxi){
    if (err) {
      throw err;
    }
    if (!taxi) {
      res.json({
        success: false,
        message: 'Failed, user not found'
      });
    }else{
      if (taxi.password != req.body.password) {
        res.json({
          success: false,
          message: 'Failed, wrong password'
        });
      } else {
        var token = jwt.sign(taxi, db, {
          expiresInMinutes: 1440
        });

        res.json({
          success: true,
       message: 'Token created',
          token: token
        });
      }
    }
  })
}
