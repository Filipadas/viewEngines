var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('barcelona');
});

router.get('/jogadores', function(req, res) {
  res.render('jogadores');
});

router.get('/titulos', function(req, res) {
  res.render('titulos');
});


module.exports = router;