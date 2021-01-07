// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // update a burger within the database
  updateOne: function (objColVals, boolean, condition, cb) {
    orm.updateOne("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },
  // Delete a burger within the database
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
