import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import config from './config';
import User from '../model/user';
import {findByEmail, createUser} from '../lib/user';

//this will get called in google strategy 
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
});


passport.use(
  new GoogleStrategy({
    //options for google
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: '/login/google/redirect'
  }, (token, refreshToken, profile, done) => {
    // check if user already exists base on email
    const email = profile.emails[0].value;
    findByEmail(email).then(function(currentUser){
      console.log(currentUser);
      done(null, currentUser);
    })
    .catch((err) => {
      //can't find match user, so we create new user
      createUser(email, profile).then(function(newUser){
        console.log('new user created: ' + newUser);
        done(null, newUser);
      });
    })
    
  })
)