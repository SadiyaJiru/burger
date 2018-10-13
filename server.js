// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// Create an instance of the express app.
var app = express();

var PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');
app.use(routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
