const _JWT = require('../common/_JWT');

module.exports = (router) => {
  var homController = require("../controllers/home.controller");

  router.get("/", homController.home);

  router.get("/about", homController.about);

  router.get('/token', async function(req, res) {
    var user = {
      name: "Admin",
      email: "admin@gmail.com",
    };
    const _token = await _JWT.make(user);
    res.send({ token: _token });
  })
};
