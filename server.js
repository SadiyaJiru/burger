var express = require('express');

var exphbs = require("express-handlebars");
//npm i method-override
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);



app.listen(process.env.PORT || port)
console.log("Port Listen: " + port)
