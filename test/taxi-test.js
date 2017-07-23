var expect = require('chai').expect;

var randomString = require('randomstring');

var Taxi = require('../api/models/taxi');

describe('Taxis: models', function(){
  describe('#new', function(){
    it('should create a new Taxi', function(done){
      var data = {
        latitude: randomString.generate({
          charset: 'numeric'
        }),
        longitude: randomString.generate({
          charset: 'numeric'
        }),
        status: 'available'
      }
      
      var taxi = new Taxi(data, function(err, taxi){
        should.not.exist(err);
        done();
      });
      done();
    });
  });
});
