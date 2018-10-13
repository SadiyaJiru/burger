//Routers is how the application’s endpoints (URIs) 
//respond to client requests.

var express = require("express");

var burgerRouter = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burgers");

// Create all routes and set up logic within those routes where required.
burgerRouter.get("/", function(req, res){
    burgerRouter.all(function(data){
var burgerObject = {
    burgerRouter: data
};
console.log(burgerObject)
res.render(burgerObject)
    })
})
burgerRouter.post("/api/burgers", function(req, res) {
    burgerRouter.create([
        req.body.name, req.body
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  burgerRouter.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgerRouter.update(req.body, condition, function(result){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  burgerRouter.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burgerRouter.delete(req.body, condition, function(result){
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
module.exports = burgerRouter;
