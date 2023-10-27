const passport = require('passport');
const {Strategy} = require('passport-google-oauth20');

require('dotenv').config();
const config = {
     CLIENT_ID : process.env.CLIENT_ID,
     CLIENT_SECRETS : process.env.CLIENT_SECRETS,
     COOKIE_KEY_1 : process.env.COOKIE_KEY_1,
     COOKIE_KEY_2 : process.env.COOKIE_KEY_2
};

const AUTH_OPTIONS = {
     callbackURL : '/auth/google/callback',
     clientID : config.CLIENT_ID,
     clientSecret : config.CLIENT_SECRETS,
}

function verifyCallback(accessToken, refreshToken,profile, done){
     console.log('Google loged In!');
     done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user,done)=>{
     done(null,user.id);
});

passport.deserializeUser((obj,done)=>{
     done(null,obj);
});
