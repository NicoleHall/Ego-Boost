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

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();
  });
});

//  everything route
router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
  	title: "Website Example",
    token: _.uniqueId()
  });
});

module.exports = router;
