/**
 * name: loginController.js
 * Student ID: 301166451
 * Student Name: Rahilkumar Patel
 * Date: 17-10-2021
 */
const passport = require('passport');

// User Model instance
const userModel = require('../models/user');
const User = userModel.User; // alias

// GET Display login form.
module.exports.login = (req, res, next) => {
    res.render('login', {nav: 'login', user: req.session.passport, messages: []});
}

// POST login form and Authenticate user.
module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // server error
        if (err) {
            return next(err);
        }

        // user login error
        if (!user) {
            return res.redirect('/login', {
                nav: 'login',
                user: req.session.passport,
                message: ['Authentication Error']
            });
        }

        req.login(user, (err) => {
            // server error?
            if (err) {
                return next(err);
            }

            return res.redirect('/business-contacts');
        });
    })(req, res, next);
}

// GET Display register form.
// module.exports.register = (req, res, next) => {
//     // load login only if the user is not already logged
//     if (!req.user) {
//         return res.render('register', {
//             nav: 'login',
//             messages: [],
//             user: req.session.passport
//         });
//     }
//
//     return res.redirect('/');
// }

// POST register form and save user.
// module.exports.saveUser = (req, res, next) => {
//     // instantiate a user object
//     const newUser = new User({
//         username: req.body.username,
//         //password: req.body.password
//         email: req.body.email,
//         displayName: req.body.displayName,
//         user: req.session.passport
//     });
//
//     User.register(newUser, req.body.password, (err) => {
//         if (err) {
//             console.log("Error: Inserting New User");
//             console.log(err);
//             let errorMesage = '';
//             if (err.name === "UserExistsError") {
//                 console.log('Error: User Already Exists!')
//                 errorMesage = 'User Already Exists!';
//             }
//
//             return res.render('auth/register', {
//                 title: 'Register',
//                 messages: ['Error: Inserting New User!', errorMesage],
//                 user: req.session.passport
//             });
//         } else {
//             // if no error exists, then registration is successful
//             return passport.authenticate('local')(req, res, () => {
//                 res.redirect('/business-contacts');
//             });
//         }
//     });
// }

// GET logout user.
module.exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
