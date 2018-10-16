//Create the `router` for the app,
//and export the `router` at the end of file.

//Importing express and burgers.js
var express = require("express");
var burgers = require("../models/burgers");
var router = express.Router();

// Create all routes and set up logic for routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//Route to create a new burger
router.post("/", function(req, res) {
  burgers.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});
//Route for updating the new with an ID
router.put("/:id", function(req, res) {
  var id = req.params.id;

  console.log("id", id);

  burgers.updateOne(id, function() {
    res.redirect("/");
  });
});
module.exports = router;
