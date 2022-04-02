// that is middleware of oauth
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4 } = require("uuid");
const User = require("../models/user.models");
const  newToken  = require("./jwt");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accesstoken, refreshToken, profile, done) {
      const email = profile._json.email;
      // check if user exists
      let user = await User.findOne({ email: email });

      if (!user) {
        // if not create one
        user = await User.create({
          email: email,
          name: profile._json.name,
          password: v4(),
        });
      }
      request.user = user;
      let token = newToken(user);
      // callback with num and the user object
      return done(null, { user, token });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;
