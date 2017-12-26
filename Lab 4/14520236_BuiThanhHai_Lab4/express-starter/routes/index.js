var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
var welcomeUser;
router.get('/', function(req, res) {
  res.render('login', { title: 'Express' ,vaildate:false});
});

module.exports = router;
