var express = require('express'),
	path = require('path'),
	app = express();

// set view engine
app.engine('hbs', require('express-handlebars')({ defaultLayout: 'master', extname: 'hbs' }));
app.set('view engine', 'hbs');

// set configs
app.set('port', 3000);

// static
app.use(express.static(path.join(__dirname, '/build')));

// routes
app.get('/', function (req, res) {
	res.render('index', {
		title: 'Three.js Bouncing Ball',
		scripts: ['/app.js']
	});
});

// listen
app.listen(app.get('port'), function () {
	console.log('Listening on port ' + app.get('port'));
});