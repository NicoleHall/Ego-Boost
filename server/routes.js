'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');

// compliment route

var databasePath = __dirname + '/database.json';

router.get('/compliment', function(req, res){
  fs.readFile(databasePath, function(err, data){

    if (err) { console.log(err); }
    data = JSON.parse(data.toString('utf8'));
    var complimentArray = data["complimentArray"];
    var randomCompliment = complimentArray[Math.floor(Math.random()*complimentArray.length)];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(JSON.stringify(randomCompliment));
    res.end();
  });
});

router.post('/compliment', function(req, res){
  var compliments = req.body;
  console.log(compliments);
  var completeFile;
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(err); }
    completeFile = JSON.parse(data.toString('utf8'));
  });
  completeFile["complimentArray"].push(data);
  // want to get the body of the post into the complimentArray
  // stingify the compliments file
  // save it into the completeFile
  fs.writeFile(databasePath, completeFile);
});

//  everything route
router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
  	title: "Website Example",
    token: _.uniqueId()
  });
});

module.exports = router;
