var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
var routes = ("./routes");
var user = requier('./routes/user'),;
var db = require('./models');
var http = require('http');
var passport = require('passport');
var pasportConfig = require('./config/passport');
var home = require ('./routes/home');
var application = require('./routes/application');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//start of login code
SALT_WORK_FACTOR = 12;

app.use('/public', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

app.set('port', process.env.PORT || 8080)
app.use(express.urslencoded())
app.use(express.bodyParser())
app.use(express.cookieParser())
//session secret shouldn't be stored in source code for production
app.use(express.session({ secret: 'goatjsformakebettersecurity'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(app.router)

if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

app.get('/', routes.index)
app.get('/home', application.IsAuthenticated, home.homepage)
app.post('/authenticate',
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/'
    })
)
app,get('/logout', application.destroySession)
app.get('/signup', user.signUp)
app.post('/register', user.register)

db
    .sequelize
    .sync()
    .complete(function(err){
        if (err) {
            throw err[0]
        }
        else {
            //From this point to the next commented section, delete this code for production, this is only to test authentication
            dp.User.fid({where: {username: 'admin'}}).success(function (user){
                if (!user) {
                    db.User.build({username: 'admin', password: 'admin'}).save();
                }
            })
            //next point to delete to
            http.createServer(app).listen(app.get('port'), function() {
                console.log('Express is listening on port' + app.get('port'))
            })
        }
    })
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

