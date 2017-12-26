var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var url = 'mongodb://localhost:27017/myusers';
mongoose.connect(url);
var userSchema= new Schema({
  username: { type: String, required: true, unique: true },
 // email   : String,
  email : {type: String, required: true },
  password: { type: String, required: true },
});
var User =mongoose.model('User',userSchema);
var loginUser = new User();

router.get('/login', function(req, res) {
  res.render('login', { title: 'Express' ,vaildate:false});
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var strCaught={};

router.post('/login', urlencodedParser, function(req, res) {
  strCaught=req.body;
  User.findOne({"email":strCaught["email"],"password":strCaught["password"]},function(err, loginUser) {
    if (err){
      console.log(err);
      res.render('login', { message: 'Connect fail . Try again !',vaildate:true});
    }      
    else if(loginUser != null){
      console.log(loginUser); 
      res.render('index', { username: loginUser.username });
      /*res.redirect('/');*/
    }
    else {
      console.log('Sai tai khoan hoac mat khau');
      res.render('login', { message: 'Username or Password is incorrect',vaildate:true});
    }
  });

});
module.exports = router;
