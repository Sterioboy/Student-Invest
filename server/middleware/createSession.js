const session = require('express-session'); // библиотека для работы с сессиями// cookie-parser уже включен в express-session
const pgSessionStore = require('connect-pg-simple')(session); // импортируем экземпляр базы данных для хранения сессий
require('dotenv').config();
// записывает переменную req.session.user,  данные из session storage, относящиеся к прилетевшей куке.
//  если куки нету или она не найдена в session storage - req.session.user -> unfefined
module.exports = session({
  name: 'sid', // название куки
  store: new pgSessionStore({
    conString: //  настройки для подключения к БД, которая хранит куки (в данном случае это та же самая БД, которую мы используем в проекте)
      process.env.NODE_ENV === 'production'
        ? process.env.DB_URL_PROD
        : process.env.DB_URL_DEV, 
  }),
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false,                     // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
});
