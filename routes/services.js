/**
 * name: services.js
 * Student ID: 301166451
 * Student Name: Rahilkumar Patel
 * Date: 02-10-2021
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('services', {nav: 'services', user: req.session.passport});
});

module.exports = router;
