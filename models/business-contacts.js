let mongoose = require('mongoose');

// create a model class
let businessContactsModel = mongoose.Schema({
    name: {type: String},
    number: {type: Number},
    email: {type: String},
}, {
    collection: "businessContacts"
});

module.exports = mongoose.model('businessContact', businessContactsModel);