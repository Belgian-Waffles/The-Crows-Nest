var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();

var spotcrime = require('spotcrime');
 
// somewhere near p

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

// somewhere near phoenix, az
var loc = {
  lat: 33.39657,
  lon: -112.03422
};

var radius = 0.01; // this is miles

spotcrime.getCrimes(loc, radius, function(err, crimes){
  console.log(loc);
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

