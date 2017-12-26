var express = require('express');
var router = express.Router();

/* GET home page. */
var welcomeUser;
router.get('/', function(req, res) {
  res.render('index', { username: welcomeUser });
});

module.exports = router;
