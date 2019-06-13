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
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
