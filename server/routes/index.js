const router = require("express").Router();
const { getAllInvestors } = require("../controllers/getAllInvestorsController");

router.get("/", (req, res) => {
  res.redirect("/");
});

router
  .route("/getAllInvestors")
  .get(getAllInvestors);

module.exports = router;
