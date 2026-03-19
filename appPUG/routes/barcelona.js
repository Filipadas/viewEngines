var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('barcelona', { title: 'Barcelona' });
});

router.get('/jogadores', function(req, res) {
  res.render('jogadores');
});

router.get('/titulos', function(req, res) {
  res.render('titulos', { title: 'Títulos do Barcelona' });
});


module.exports = router;