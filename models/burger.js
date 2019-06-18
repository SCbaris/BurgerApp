var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(oldCondition, ID, cb) {
    orm.updateOne(oldCondition, ID, function(res) {
      cb(res);
    });
  }
}; // Using ORM in our code.

//send to the controller
module.exports = burger;
