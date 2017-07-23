'use strict'
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Taxidb')

var Schema = mongoose.Schema;

var TaxiSchema = new Schema({
  latitude:{
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
    }],
  }
},{timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Taxis', TaxiSchema);
