//this part help us to route our url
//whenever we change the path controller involve the situation

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body.burger_name);
    burger.insertOne(req.body.burger_name,function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    var condition =req.params.id;
  
    console.log("condition ", condition);
  
    burger.updateOne( // With update first we get old condition of item what we change
                       // Second ID number. 
     req.body.devoured
    , condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
//get read
//post write
//put update
//delete delete

module.exports = router;

