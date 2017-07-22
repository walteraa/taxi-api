'use strict';

var mongoose = require('mongoose');

require('../models/taxi');

mongoose.connect('mongodb://localhost/Taxidb');

var Taxi = mongoose.model('Taxis');

exports.list_taxis = function(req, res){
  Taxi.find({}, function(err, taxi){
    if(err){
      res.send(err);
    }
    res.json(taxi);
  })
};

exports.create_taxi = function(req, res){
  var new_taxi = new Taxi(req.body);
  new_taxi.save(function(err, taxi){
    if (err){
      res.send(err);
    }
    res.json(taxi);
  });
}

exports.update_location = function(req, res){
  var id = req.body.id;
  Taxi.findById(id, function(err, taxi){
    if(err){
      res.send(err)
    }
    taxi.latitude = req.body.latitude;
    taxi.longitude = req.body.longitude;
    taxi.status = req.body.status;
    res.send(taxi)
  });
}
