const express = require('express');
const logger = require('morgan');
const path = require('path');

// Импортируем созданный в отдельный файлах рутеры.
const session = require('./middleware/createSession');
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth');
const errorRouter = require('./routes/errors')


const app = express();

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

app.use(session);
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use(errorRouter)

module.exports = app;
