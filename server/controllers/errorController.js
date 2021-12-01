const createError = require('http-errors');

// catch 404 and forward to error handler
const create404 = (req, res, next) => {
  console.log('catch error');
  next(createError(404));
};

// error handler
const renderError = (err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

module.exports = { create404, renderError };
