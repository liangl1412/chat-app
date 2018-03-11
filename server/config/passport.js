import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import config from './config';
import User from '../model/user';

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
    // check if user already exists base on google id
    User.findOne({
      googleid: profile.id
    }).then((currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        done(null, currentUser);
      } else {
        // create new user
        new User({
          username: profile.displayName,
          googleid: profile.id
        }).save().then((newUser) => {
          console.log('new user created: ' + newUser);
          done(null, newUser);
        })
      }
    })
  })
)