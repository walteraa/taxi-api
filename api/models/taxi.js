'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaxiSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
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
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.connect('mongodb://localhost/Taxidb');

module.exports = mongoose.model('Taxi', TaxiSchema);
