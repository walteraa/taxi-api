'use strict';

var mongoose = require('mongoose');
var Taxi = require('../models/taxi');

mongoose.connect('mongodb://localhost/Taxidb');

exports.list_taxis = function (req, res) {
  Taxi.find({}, '-password', function (err, taxi) {
    if (err) {
      res.send(err);
    } else {
      res.json(taxi);
    }
  });
};

exports.create_taxi = function (req, res) {
  var new_taxi = new Taxi(req.body);

  new_taxi.save(function (err, taxi) {
    if (err) {
      res.send(err);
    }
    res.json(taxi);
  });
};

exports.accept_driver = function (req, res) {
  var id = req.body.id;

  Taxi.findById(id, function (err, taxi) {
    if (err) {
      res.send(err);
    } else {
      taxi.approved = req.body.approved;
    }
    res.send(taxi);
  });
};

exports.update_location = function (req, res) {
  var id = req.body.id;

  Taxi.findById(id, function (err, taxi) {
    if (err) {
      res.send(err);
    }
    taxi.latitude = req.body.latitude;
    taxi.longitude = req.body.longitude;
    taxi.status = req.body.status;
    res.send(taxi);
  });
};
