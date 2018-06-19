// Get dependencies
const express = require('express');
var router = express.Router();
 
/* Get HOME PAGE */
router.get('/', function(req, res, next) {
	res.render('dashboard', {title: 'dashboard'});
  });			
 
		
module.exports = router;