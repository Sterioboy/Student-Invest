const router = require("express").Router();
const { getAllInvestors } = require("../controllers/getAllInvestorsController");
const {
  profileUpdate,
  profileGet,
  upload,
  createAvatar,
} = require("../controllers/profileController");
const {
  connectionsGet,
  connectionsUpdate,
} = require("../controllers/connectionsController");

router.get("/", (req, res) => {
  res.redirect("/");
});

router.route("/getAllInvestors").get(getAllInvestors);

// router.route("/uploud").post(upload.single("file"), createAvatar);

router.route("/profile").post(upload.single("file"), profileUpdate).get(profileGet);

router.route("/connections").get(connectionsGet).post(connectionsUpdate);

module.exports = router;
