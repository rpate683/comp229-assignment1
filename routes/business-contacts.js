/**
 * name: business-contacts.js
 * Student ID: 301166451
 * Student Name: Rahilkumar Patel
 * Date: 18-10-2021
 */
const express = require('express');
const router = express.Router();

const businessContactsController = require('../controllers/businessContactsController');

function authCheck(req, res, next) {
    // send to login if user is not logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business Contacts List page - READ Operation */
router.get('/', authCheck, businessContactsController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', authCheck, businessContactsController.add);

/* POST Route for saving the create data - CREATE Operation */
router.post('/add', authCheck, businessContactsController.create);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', authCheck, businessContactsController.update);

/* POST Route to save the Edit data - UPDATE Operation */
router.post('/edit/:id', authCheck, businessContactsController.save);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', authCheck, businessContactsController.delete);


module.exports = router;
