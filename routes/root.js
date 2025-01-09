const express = require("express");
const controllerConfig = require("../config/controller/config");
const { findAll } = require("../database/connection");
const router = express.Router();

router.get("/", async function (_req, res) {
  const controllerData = controllerConfig.merge({
    header: {
      title: "Index Page",
    },
    file: "index.ejs",
  });

  const result = await findAll();
  controllerData.data = result;
  res.render("application.ejs", controllerData);
});

module.exports = router;
