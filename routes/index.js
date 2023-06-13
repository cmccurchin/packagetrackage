var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/page1', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/page1.html'));
});

module.exports = router;
