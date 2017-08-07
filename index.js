global.db = require('./libs/db/db.js')();
var express = require("express");
var methodOverride = require("method-override");
var compress = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var app = express();

var router = require("./controller/Router");

app.enabled('trust proxy');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));



// var model = require('./controllers/livetest');
// app.set('views', __dirname + 'views');
var port = process.env.PORT || 4000;
var ip = process.env.IP || '127.0.0.1';
app.listen(port,ip);

app.get('/', function(req,res){
	res.send('Welcome to my world');
});

router.route(app);
// model.isaac(app);


console.log("server started at " + ip + " and the port is " + port);
