/**
 * name: login.js
 * Student ID: 301166451
 * Student Name: Rahilkumar Patel
 * Date: 02-10-2021
 */
const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

/* GET Route for displaying the Login page */
router.get('/login', loginController.login);

/* POST Route for processing the Login page */
router.post('/login', loginController.authenticate);

/* GET to perform Register display */
router.get('/register', loginController.register);

/* GET to perform Register display */
router.post('/register', loginController.saveUser);

/* GET to perform UserLogout */
router.get('/logout', loginController.logout);

module.exports = router;
