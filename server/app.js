const express = require('express');
const logger = require('morgan');
const path = require('path');

const session = require('./middleware/createSession');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const isAuth = require('./middleware/isAuth');
const errorRouter = require('./routes/errors');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session);
app.use(isAuth);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use(errorRouter);

module.exports = app;
