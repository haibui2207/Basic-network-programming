var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/*var jsonfile = require('jsonfile');
var file = '../db.json';
var fs = require('fs');*/
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/myusers';

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Express',authentication:false,vaildate:false});
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var strCaught={};
var dataInsertDB={} ; 


router.post('/registered', urlencodedParser, function(req, res) {
  strCaught=req.body;
  if(!validateEmail(strCaught["email"])){
  	res.render('signup', { message: 'Email is invalid!',authentication:false,vaildate:true});
  }
  else if(validateEmail(strCaught["email"]))  {  	
    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);

        // Get the documents collection
        var collection = db.collection('users');
        dataInsertDB = [{"username": strCaught["username"],"email": strCaught["email"],"password": strCaught["password"],"confirm-password":strCaught["confirm-password"]}];
        // Insert some users
        collection.insert(dataInsertDB, function (err, result) {
          if (err) {
            console.log(err);
         } else {
            console.log('Insert data success!');
          }
          //Close connection
          db.close();
        });
      }
    });
    res.render('index', { username: strCaught["username"] });
  }     
});



function validateEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

module.exports = router;
