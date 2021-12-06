const { Profile, User } = require("../db/models/profile");

exports.profileUpdate = async (req, res) => {
  const { photo, info, interests, country, language } = req.body;
  const newProfile = new Profile({
    user_id: req.session.user.id,
    photo: photo,
    info: info,
    interests: interests,
    country: country,
    language: language,
  });
  try {
    await newProfile.save();
    res.json(newProfile);
  } catch (err) {
    console.log(err);
  }
};
