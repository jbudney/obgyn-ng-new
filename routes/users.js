// Get dependencies
const express = require('express');
var router = express.Router();
 
/* Get HOME PAGE */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
  }); 
		
module.exports = router;