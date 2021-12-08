const router = require("express").Router();
const { getAllInvestors } = require("../controllers/getAllInvestorsController");
const { profileUpdate, profileGet } = require("../controllers/profileController");
const { connectionsGet, connectionsUpdate } = require("../controllers/connectionsController");

router.get("/", (req, res) => {
  res.redirect("/");
});

router.route("/getAllInvestors").get(getAllInvestors);

router.route("/profile").post(profileUpdate).get(profileGet);

router.route("/connections").get(connectionsGet).post(connectionsUpdate);

module.exports = router;
