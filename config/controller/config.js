/**
 * This is the configuration file for the controller.
 *
 * Configure your default values here.
 *
 * Or you overwrite them in the controller/routes.
 */
const yieldContent = require("./yield-content");

module.exports = {
  configuration: {
    html: {
      lang: "de",
      dir: "ltr",
      header: {
        title: "Edit Default Meta Title Here",
      },
    },
    rows: "",
    row: "",
    data: "",
    file: "index.ejs",
  },
  yield: yieldContent,
  merge: function (b) {
    return Object.assign(this, b);
  },
};
