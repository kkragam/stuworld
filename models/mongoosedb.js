var mongoose = require('mongoose');
var assert = require('assert');
var dbvars = require('./../config/gconfig').dbvars;
var testSchema=require('./schemas/topics');
/*
mongoose.connect(dbvars.dburl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("DB Connnection Success")
});
// When the connection is disconnected
db.on('disconnected', function () {  
  console.log('Mongoose  default connection disconnected'); 
  
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});


exports.db=db;
*/