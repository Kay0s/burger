const express = require("express");
let router = express.Router();
const connection = require("../config/connection.js");

// Import the model (burger.js) to use its database functions
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Delete a burger
router.delete("/api/burgers/:id", function (req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [JSON.parse(req.params.id)], function (err, result) {
    if (err) {
      //If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    // else if (result.affectedRows === 0) {
    //   //If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
