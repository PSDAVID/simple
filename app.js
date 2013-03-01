
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , url = require('url')
  , request = require('request');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/* Rutas */
app.get('/', function(req, res){
	res.render('index', {
		title : 'Index'
	});
});

app.get('/peterpan', function(req, res){
	res.render('peterpan', {
		title : "Peter Pan"
	});
});

app.get('/pinocho', function(req, res){
	res.render('pinocho', {
		title : "Pinocho"
	});
});

app.get('/otro', function(req, res){
	res.render('otro', {
		title : "Otro"
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
