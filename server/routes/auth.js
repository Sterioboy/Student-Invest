const { 
  renderSignInForm, 
  createUserAndSes, 
  renderSignUpForm, 
  checkUserAndCreateSes, 
  destroySes, 
  isValid
} = require('../controllers/authController');

const router = require('express').Router();

router
  .get('/signin', renderSignInForm)
  .post('/signin', isValid, checkUserAndCreateSes);

router
  .get('/signup', renderSignUpForm)
  .post('/signup', createUserAndSes);

router.get('/signout', destroySes);

module.exports = router;
