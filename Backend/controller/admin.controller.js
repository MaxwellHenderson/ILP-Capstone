let AdminModel = require("../model/admin.model.js");

let getAdmin = (req, res) => {
  let adminUsername = req.params.adminUsername;
  let adminPassword = req.params.adminPassword;

  AdminModel.find(
    { adminUsername: adminUsername, adminPassword: adminPassword },
    (err, data) => {
      if (!err) {
      } else {
      }
    }
  );
};

module.exports = { getAdmin };
