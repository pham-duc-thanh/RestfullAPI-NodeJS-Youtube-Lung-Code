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
  });

  router.get('/check_token', async function(req, res) {
    try {
      var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0sImlhdCI6MTcxMTQ1MjM2MSwiZXhwIjoxNzExNDU1OTYxfQ.UMqjCTRTPCsyx5P4VNuKIqEIR05FfcFuDiDxu2v3E9c"
      const data = await _JWT.check(_token);
      res.send({ data: data });
    } catch (error) {
      res.send({ data: "Mã token không hợp lệ!" });
    }
  });
};
