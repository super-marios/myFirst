var express = require('express');
var router = express.Router();

// Home
router.get('/', function (req, res) {
	res.send('Home Page!');
});

// About
router.get('/about', function (req, res) {
	res.send('About page');
});

module.exports = router;