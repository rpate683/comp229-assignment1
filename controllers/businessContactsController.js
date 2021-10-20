/**
 * name: businessContactsController.js
 * Student ID: 301166451
 * Student Name: Rahilkumar Patel
 * Date: 18-10-2021
 */

// create a reference to the model
let BusinessContact = require('../models/business-contacts');

/**
 * List business contact action.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.list = (req, res, next) => {
    BusinessContact.find((err, businessContactList) => {
        if (err) {
            return console.error(err);
        } else {
            // render list.
            return res.render('business-contacts-list', {
                nav: 'business-contacts',
                BusinessContactList: businessContactList,
                user: req.session.passport,
                messages: []
            });
        }
    });
}

/**
 * Add business contact form display action.
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports.add = (req, res, next) => {
    return res.render('business-contacts-add', {nav: 'business-contacts', user: req.session.passport, messages: []});
}

/**
 * Create business contact action.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.create = (req, res, next) => {
    const newBusinessContact = BusinessContact({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    BusinessContact.create(newBusinessContact, (err, BusinessContact) => {
        if (err) {
            console.log(err);
            return res.end(err);
        }

        // refresh the list
        return res.redirect('/business-contacts');
    });
}

/**
 * Update business contact display form action.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.update = (req, res, next) => {
    BusinessContact.findById(req.params.id, (err, businessContact) => {
        if (err) {
            console.error(err);
            return res.end(err);
        }

        // render edit form.
        return res.render('business-contacts-edit', {
            nav: 'business-contacts',
            businessContact,
            user: req.session.passport,
            messages: []
        });
    });
}

/**
 * Save edited business contact action.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.save = (req, res, next) => {
    const id = req.params.id;
    const updateBusinessContact = BusinessContact({
        _id: id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    BusinessContact.updateOne({_id: id}, updateBusinessContact, err => {
        if (err) {
            console.error(err);
            return res.end(err);
        }

        // redirect to listing.
        return res.redirect('/business-contacts');
    });
}

/**
 * Delete business contact action.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.delete = (req, res, next) => {
    BusinessContact.remove({_id: req.params.id}, err => {
        if (err) {
            console.error(err);
            return res.end(err);
        }

        // redirect to listing.
        return res.redirect('/business-contacts');
    });
}