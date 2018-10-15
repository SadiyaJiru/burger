//Routers is how the application’s endpoints (URIs)
//respond to client requests.

var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burgers");

// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//Route for Creat/add a new burger
router.post("/", function(req, res) {
  burgers.create([
    "burger_name"], [req.body.burger_name],
   function() {
    // Send back the ID of the new quote
    res.redirect("/");
    });
});
//Route for updating the burger by id
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update(
    {
      condition: req.body.condition
    },
    condition,
    function() {
      // Send back the ID of the new burger
      res.redirect("/");
    }
  );
});

module.exports = router;
