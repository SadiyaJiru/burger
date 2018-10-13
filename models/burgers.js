//Interacts with orm.js

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(cb) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
      //update the burger table with column value + condition
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
