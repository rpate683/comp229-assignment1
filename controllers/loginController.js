module.exports.login = (req, res, next) => {
    res.render('login', {nav: 'login', messages: []});
}

module.exports.authenticate = (req, res, next) => {
    //todo: auth process
    res.render('login', {nav: 'login', messages: ['Login submitted.']});
}

module.exports.logout = (req, res, next) => {
    res.redirect('/');
}
