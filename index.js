var express = require("express");
var methodOverride = require("method-override");
var compress = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var app = express();


app.use(morgan('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static('public'));


var router = require("./controller/Router");
// var model = require('./controllers/livetest');
app.enabled('trust proxy');
app.set('view engine', 'jade');
// app.set('views', __dirname + 'views');
app.use(morgan('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));


var port = process.env.PORT || 8000;
var ip = process.env.IP || '127.0.0.1';
app.listen(port,ip);

app.get('/', function(req,res){
	res.send('Welcome to my world');
});

router.route(app);
// model.isaac(app);


console.log("server started at " + ip + " and the port is " + port);
