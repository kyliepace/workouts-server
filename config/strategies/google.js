'use strict';
var configAuth = require('../auth.js');
const User = require('../../models/user');
var GoogleTokenStrategy = require('passport-google-id-token');

const googleLogin = new GoogleTokenStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret
}, (token, googleID, done) => { // I had to change this line from what I found documented here https://medium.com/@alexanderleon/implement-social-authentication-with-react-restful-api-9b44f4714fa

    // try to find the user based on their google id
    User.findOne({ 'google.id' : googleID }, function(err, user) {
        if (err) { return done(err); }

        if (user) {
        // if a user is found, log them in
        return done(null, user);
        }
        else {
        // if the user isnt in our database, create a new user
        var newUser          = new User();

        // set all of the relevant information
        newUser.google.id    = googleID.id;
        newUser.google.token = `${token.header.alg}+${token.header.kid}+${token.header.typ}`,
        newUser.google.name  = token.payload.name;
        newUser.google.email = token.payload.email; // pull the first email
        // save the user
        newUser.save(function(err) {
            if (err)
                throw err;
            return done(null, newUser);
        });
        }
    });
});

module.exports = googleLogin;