const express = require("express");
const controllerConfig = require("../config/controller/config");
const { findAll } = require("../database/connection");
const router = express.Router();

router.get("/", async function (_req, res) {
  const controllerData = controllerConfig.merge({
    header: {
      title: "Welcome Page",
    },
    file: "welcome/index.ejs",
  });

  let results = await findAll();
  const restaurants = results.map((entry) => {
    let averageGrade;
    try {
      averageGrade = entry.grades.reduce(
        (acc, grade) => acc + grade.score,
        0,
      ) / entry.grades.length;
      averageGrade = averageGrade.toFixed(2);
    } catch (error) {
      averageGrade = 0;
    }

    return {
      name: entry.name,
      cuisine: entry.cuisine,
      averageGrade: averageGrade,
    };
  });
  controllerData.restaurants = restaurants;
  res.render("application.ejs", controllerData);
});
module.exports = router;
