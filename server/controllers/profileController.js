const { Profile } = require("../db/models");

exports.profileUpdate = async (req, res) => {
  const { photo, info, interests, country, language } = req.body;
  //IF
  const profile = await Profile.findOne({
    where: { user_id: req.session.user.id },
  });
  console.log(profile);
  if (profile === null) {
    const newProfile = new Profile({
      login: req.session.user.login,
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
  } else {
    req.body.photo ? (profile.photo = req.body.photo) : null;
    req.body.info ? (profile.info = req.body.info) : null;
    req.body.interests ? (profile.interests = req.body.interests) : null;
    req.body.country ? (profile.country = req.body.country) : null;
    req.body.language ? (profile.language = req.body.language) : null;
    await profile.save();
    res.json(profile);
  }
};

exports.profileGet = async (req, res) => {
  const profile = await Profile.findOne({
    where: { user_id: req.session.user.id },
  });
  res.json(profile);
};
