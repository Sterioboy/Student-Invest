const express = require('express');
const router = express.Router();
const { profileUpdate } = require('../controllers')


router
  .route('/profile')
  .post(profileUpdate);
