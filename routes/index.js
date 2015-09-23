var router = require('express').Router();

router.get("/", function (req, res) {
  res.send("index");
});

router.get("/about", function (req, res) {
  res.send("about");
});

module.exports = router;
