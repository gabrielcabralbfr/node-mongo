var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname,'..', 'views', 'index.html'));
  res.render('index', {title: "HELL"})
});

module.exports = router;
