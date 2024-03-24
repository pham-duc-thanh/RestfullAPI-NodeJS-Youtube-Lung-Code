module.exports = (router) => {
  var homController = require("../controllers/home.controller");

  router.get("/", homController.home);

  router.get("/about", homController.about);
};
