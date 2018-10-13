//Interacts with orm.js
//ode that will call the ORM functions using burger specific input for the ORM.

var orm = require("../config/orm.js");

var burger = {
  //run the method on the burgers table/model
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //create
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //Update
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //     //update the burger table with column value + condition
  //  //Pass in condition such as WHERE
  //     orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = burger;
