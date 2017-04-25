var express = require('express');

var router = express.Router();

router.get('/p/:id',function(req, res, next) {
	res.render('article');
});

module.exports = router;