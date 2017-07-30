'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaxiSchema = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  status: {
    type: [{
      type: String,
      enum: ['available', 'busy']
    }]
  },
  approved: {
    type: boolean,
    default: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.connect('mongodb://localhost/Taxidb');

mongoose.model('Taxi', TaxiSchema);
