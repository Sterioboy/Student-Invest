const bcrypt = require('bcryptjs');
const { User } = require('../db/models');

function failAuth(res) {
  console.log('Что то пошло не так');
  return res.status(401).end();
}

function serializeUser(user) {
  return {
    id: user.id,
    login: user.login,
  };
}

async function checkUser(login) {
  const user = await User.findOne({ where: { login: login }, raw: true });
  return user ? true : false;
}

exports.renderSignInForm = (req, res) => res.render('auth/auth', { title: 'Sign in site', action: 'signin', button: 'Sign in', isSignin: true });
exports.renderSignUpForm = (req, res) => res.render('auth/auth', { title: 'Sign up', action: 'signup', button: 'Sign up', isSignup: true });

exports.isValid = (req, res, next) => {
  next();
};

exports.createUserAndSes = async (req, res, next) => {
  const { login, password } = req.body;
  try {
    if (await checkUser(login)) return failAuth(res);
    // Мы не храним пароль в БД, только его хэш
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      login,
      password: hashedPassword,
    });
    console.log(user);
    // записываем в req.session.user данные (id & name) (создаем сессию)
    req.session.user = serializeUser(user); // req.session.user -> id, name
  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return failAuth(res);
  }
  res.status(200).redirect('/'); // ответ 200 + отправка cookies в заголовке на сервер
};

exports.checkUserAndCreateSes = async (req, res, next) => {
  const { login, password } = req.body;
  try {
    // Пытаемся сначала найти пользователя в БД
    const user = await User.findOne({ where: { login: login }, raw: true });
    if (!checkUser(user.login)) return failAuth(res);

    // Сравниваем хэш в БД с хэшем введённого пароля
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return failAuth(res);

    req.session.user = serializeUser(user); // записываем в req.session.user данные (id & name) (создаем сессию)

  } catch (err) {
    console.error('Err message:', err.message);
    console.error('Err code', err.code);
    return failAuth(res);
  }
  res.status(200).redirect('/'); // ответ 200 + отправка cookies в заголовке на сервер
};

exports.destroySes = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid');
    res.redirect('/');
  });
}
