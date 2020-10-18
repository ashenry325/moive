var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data  = 'Henry as';
  res.render('index', { title: data});
});

module.exports = router;
