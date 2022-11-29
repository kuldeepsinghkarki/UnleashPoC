var express = require("express");
var router = express.Router();

router.get("/v1/public", function (req, res) {
  res.send(
    "This reponse is from Version v1"
  );
});

router.get("/v2/public", function (req, res) {
    res.send(
      "This reponse is from Version v2"
    );
  });

module.exports = router;
