'use strict'
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Taxidb')

var Schema = mongoose.Schema;

var TaxiSchema = new Schema({
  latitude:{
    type: String,
    Required: 'Latitude required.'
  },
  longitude: {
    type: String,
    Required: 'Longitude required'
  },
  created_at: {
    type: Date
  },
  updated_at:{
    type: Date
  },
  status: {
    type: [{
      type: String,
      enum: ['available', 'busy']
    }],
    default: 'available'
  }
},{timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Taxis', TaxiSchema);
