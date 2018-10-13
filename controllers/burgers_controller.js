//Routers is how the application’s endpoints (URIs) 
//respond to client requests.

var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burgers");

// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data){
var handlebarsObject = {
    allBurgers: data
};
console.log(handlebarsObject)
res.render("index", handlebarsObject)
    });
});
//Route for Creat/add a new burger
router.post("/api/burgers", function(req, res) {

  burgers.create([ req.body.name, req.body], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

  //Route for updating the burger by id
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update(req.body, condition, function(result){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  // //New route that will delete the id
  // router.delete("/api/burgers/:id", function(req, res) {
  // //the condition which is the ID is = to what ever the last part of th url is
  //   var condition = "id = " + req.params.id;
  
  //   //Run router delete on the cat model
  //   burgers.delete(req.body, condition, function(result){
  //     if (result.affectedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  
module.exports = router;
