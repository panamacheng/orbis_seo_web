var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/home', { title: 'ORBIS - Casa' });
});

router.get('/estados', function(req, res) {
  res.render('pages/estados', { title: 'Lista Estados' })
})

module.exports = router;
