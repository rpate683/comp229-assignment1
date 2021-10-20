// GET Display login form.
module.exports.login = (req, res, next) => {
    res.render('login', {nav: 'login', messages: []});
}

// POST login form and Authenticate user.
module.exports.authenticate = (req, res, next) => {
    //todo: auth process
    res.render('login', {nav: 'login', messages: ['Login submitted.']});
}

// GET Display register form.
module.exports.register = (req, res, next) => {
    // res.render('register', {nav: 'login'});
    res.render('register', {nav: 'login', messages: []});
}

// POST register form and save user.
module.exports.saveUser = (req, res, next) => {
    res.render('register', {nav: 'login', messages: ['Register user submitted.']});
}

// GET logout user.
module.exports.logout = (req, res, next) => {
    // req.logout();
    res.redirect('/');
}
