// 'use strict';
// var configAuth = require('../auth.js');
// const User = require('../../models/user');
// var FacebookTokenStrategy = require('passport-facebook-token');

// const facebookLogin = new FacebookTokenStrategy({
//   clientID        : configAuth.facebookAuth.clientID,
//   clientSecret    : configAuth.facebookAuth.clientSecret
// }, (token, refreshToken, profile, done) => {

//   process.nextTick(function() {

//     // find the user in the database based on their facebook id
//     User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

//         // if there is an error, stop everything and return that
//         // ie an error connecting to the database
//         if (err)
//             return done(err);

//         // if the user is found, then log them in
//         if (user) {
//             return done(null, user); // user found, return that user
//         } else {
//             // if there is no user found with that facebook id, create them
//             var newUser            = new User();

//             // set all of the facebook information in our user model
//             newUser.facebook.id    = profile.id; // set the users facebook id
//             newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
//             newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//             newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

//             // save our user to the database
//             newUser.save(function(err) {
//                 if (err)
//                     throw err;

//                 // if successful, return the new user
//                 return done(null, newUser);
//             });
//         }

//       });
//   });
// });

// module.exports = facebookLogin;