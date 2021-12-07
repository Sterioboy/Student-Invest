const { User } = require("../db/models");
const { Profile } = require("../db/models");

exports.getAllInvestors = async (req, res) => {
  const profile = await Profile.findAll();
  if (profile === null) {
    res.json([])
  }
  else {
    console.log(profile);
    res.json(profile);
  }
};
