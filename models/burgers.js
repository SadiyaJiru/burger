//Interacts with orm.js
//ode that will call the ORM functions using burger specific input for the ORM.

var orm = require("../config/orm.js");

var burger = {
  //run the method on the burgers table/model
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //create
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //Update
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }};

module.exports = burger;
