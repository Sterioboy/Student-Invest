const bcrypt = require('bcrypt');
const { Users } = require('../db/models');

function failAuth(res) {
  return res.status(401).end();
}

function serializeUser(user) {
  return {
    id: user.id,
    name: user.name,
  };
}

exports.isUser = async (req, res) => {
  let isAuth;

  if (req.session.user) {
    isAuth = true;
  } else {
    isAuth = false;
  }
  res.json({user: req.session.user.name, isAuth: isAuth});
}

exports.createUserAndSession = async (req, res, next) => {
  const { login, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({ 
      name: login, 
      password: hashedPassword, 
      email: email,
    });

    req.session.user = serializeUser(newUser); 
  } catch (err) {
    console.log(err)
  }

  let isAuth;
  if (req.session.user) isAuth = true;
  res.json({user: req.session.user.name, isAuth: isAuth});
};

exports.checkUserAndCreateSession = async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await Users.findOne({
      where: { name: login }, 
      raw: true
    });
    if (!user) return failAuth(res);

    await bcrypt.compare(password, user.password);
    req.session.user = serializeUser(user);

  } catch (err) {
    console.log(err);
  }

  let isAuth;
  if (req.session.user) isAuth = true;
  res.json({user: req.session.user.name, isAuth: isAuth});
}

exports.destroySession = async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid');
    return res.status(200).end();
  });
}
