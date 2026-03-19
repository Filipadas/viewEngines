var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('gremio', { title: 'Página do Grêmio' });
});

module.exports = router;