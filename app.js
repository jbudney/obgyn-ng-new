// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var dashboard = require('./routes/dashboard');
//npm install --save express body-parser
 
//init app
var app = express();
 
//block header from containing information about our server
app.disable('x-powered-by');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist 
app.set('views',path.join(__dirname, 'views')) ; 
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/src/app'));

http://localhost:3000/
app.use('/', index)
http://localhost:3000/users
app.use('/users', users);
http://localhost:3000/dashboard
app.use('/dashboard', dashboard);
 


// Catch all other routes and return the index file
app.get('/',  (req, res,next) => {
var err = new Error('not Found');
	err.status = 404;
	next(err);
});
 
 
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

