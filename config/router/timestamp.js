const express = require("express");
const router = express.Router();

/**
 * middleware that is specific to express router object
 * it is just an example of how to use middleware
 */
router.use(function timeLog(_req, _res, next) {
  console.log("Time: ", Date.now());
  next();
});

module.exports = router;
