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
      var computedIndex = Math.floor(Math.random()*complimentArray.length);
      var randomCompliment = complimentArray[computedIndex];
      res.writeHead(200, {'Content-Type': 'text/json'});
      res.write(JSON.stringify({
        message: randomCompliment,
        index: computedIndex
      }));
    res.end();
  });
});

router.post('/compliment', function(req, res){
  var compliments = req.body.postData;
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(err); }
    var completeFile = JSON.parse(data.toString('utf8'));
    completeFile.complimentArray.push(compliments);
    // want to get the body of the post into the complimentArray
    // stingify the compliments file
    // save it into the completeFile
    var dbString = JSON.stringify(completeFile);
    fs.writeFile(databasePath, dbString);
    res.writeHead(200, {'Content-Type': 'text/json'});
    var responseData = {message: "Thank you for submitting a compliment"};
    res.write(JSON.stringify(responseData));
    res.end();
  });

});

router.delete('/compliment', function(req, res){
  var indexValue = req.body.index;
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(err); }
    var completeFile = JSON.parse(data.toString('utf8'));
    completeFile.complimentArray.splice(Number(indexValue), 1);
    var dbString = JSON.stringify(completeFile);
    fs.writeFile(databasePath, dbString);
    res.writeHead(200, {'Content-Type': 'text/json'});
    var responseData = {message: "You have just deleted a dirty compliment"};
    res.write(JSON.stringify(responseData));
    res.end();
  });

});


 // everything route
router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
  	title: "Website Example",
    token: _.uniqueId()
  });
});

module.exports = router;
