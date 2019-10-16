let express = require("express");
let burger = require("../models/burger.js");
let router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(burger_data){
    console.log(burger_data);
    console.log("hello!");
    res.render("index");
    
  });
});

module.exports = router;
