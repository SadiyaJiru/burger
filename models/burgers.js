//importing the ORM to create the functions that will interact with the database


//importing ORM to communicate with DB
var orm = require("../config/orm.js");

//This snipet of code will call the ORM functions
// using burger specific input for the ORM.
var burger = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    insertOne: function (burger, callback) {
        orm.insertOne(burger, function (res) {
            callback(res);
        });
    },
    updateOne: function (id, callback) {
        orm.updateOne([id], function (res) {
            callback(res);
        });
    }
};

module.exports = burger;
