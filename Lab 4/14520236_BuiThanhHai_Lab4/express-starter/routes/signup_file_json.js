var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var file = '../db.json';
var fs = require('fs');

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Express',authentication:false,vaildate:false});
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db={};

function validateEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

router.post('/registered', urlencodedParser, function(req, res) {
  db=req.body;
  if(!validateEmail(db["email"])){
  	res.render('signup', { message: 'Email is invalid!',authentication:false,vaildate:true});
  }
  else if(validateEmail(db["email"]))
  {
  	
    fs.readFile(file, 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } 
    else {
    obj = JSON.parse(data); //now it an object
    obj.push(db); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile(file, json, {encoding: "utf8",spaces: 2}); // write it back 
    }});  	
    res.render('index', { username: db["username"] });
  }
  
});

module.exports = router;
