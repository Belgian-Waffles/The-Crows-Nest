var express = require('express');
var app = express();
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var path = require("path");
var PORT = process.env.PORT || 5000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Change static folder
app.use(express.static('public'));

var env = require('dotenv').load();


//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

 
app.get('/', function(req, res) {
 
    res.sendFile(path.join(__dirname, "public/home2.html"));
 
});
 
 
app.listen(PORT, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);
require('./app/routes/post.js')(app);
require('./app/routes/community.js')(app);
require('./app/routes/forum.js')(app);
require('./app/routes/thread.js')(app);
require('./app/routes/user.js')(app);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.User);
console.log("xxxx" + models.User)
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine');
    console.log("Local Host running on port: " + PORT);
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});