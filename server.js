#!/usr/bin/env node

var express = require('express');
var program = require('commander');
var path = require('path');
var pkg = require( path.join(__dirname, 'package.json')); 
var routes = require('./api/routes/routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('./api/models/taxi');

program
  .version(pkg.version)
  .option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
  .parse(process.argv)

var port = program.port || 3000;

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Taxidb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('Wololo running at port: '+ port);
