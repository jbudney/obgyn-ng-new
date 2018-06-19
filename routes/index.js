// Get dependencies
const express = require('express');
var router = express.Router();
 
/* Get HOME PAGE */
router.get('/', function(req, res, next) {
	res.render('index', {title: 'Express'});
  });			
 
	
router.get('/animal', function(req, res, next) {
	res.render('animal', {animal: 'D'});
});
		
module.exports = router;