var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var file = '../db.json';
var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db={};

router.get('/login', function(req, res) {
  res.render('login', { title: 'Express' ,vaildate:false});
});


function vaildateLogin(username,password)
{
  var db;
  var data;
  try {  
    data = fs.readFileSync('../db.json', 'utf8');
    db = JSON.parse(data);
    console.log(db); 
     
  } catch(e) {
    console.log('Error:', e.stack);
  }
  for(var i = 0; i < db.length; i++)
    {
      if(db[i].username == username && db[i].password == password)
      {
        return true;
      }
    }
	return false;
}

router.post('/loged', urlencodedParser, function(req, res) {
  db=req.body;
  if(!vaildateLogin(db["username"],db["password"])) 
  {
  	res.render('login', { message: 'Username or Password is incorrect',vaildate:true});
  }
  else if(vaildateLogin(db["username"],db["password"]))
  {
    welcomeUser=db["username"];
    res.render('index', { username: db["username"] });
    /*res.redirect('/');*/
  }
  
});

module.exports = router;
