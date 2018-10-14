//Routers is how the application’s endpoints (URIs)
//respond to client requests.

var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burgers");

// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var handlebarsObject = {
      burgers: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});
//Route for Creat/add a new burger
router.post("/", function(req, res) {
  burgers.insertOne([
    req.body.burger_name
  ], [
    req.body.devoured
  ], function() {
    res.redirect("/");
  });
});
//Route for updating the burger by id
router.put(":id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update(
    {
      condition: req.params.condition
    },
    condition,
    function() {
      // Send back the ID of the new burger
      res.redirect("/");
    }
  );
});

module.exports = router;
