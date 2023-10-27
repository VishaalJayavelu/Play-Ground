const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const {Strategy} = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app= express();

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
     console.log('Google Profile:', profile);
     done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user,done)=>{
     done(null,user.id);
});

passport.deserializeUser((obj,done)=>{
     done(null,obj);
});

app.use(helmet());

app.use(cookieSession({
     name: 'session',
     maxAge : 24*60*60*1000,
     keys : [config.COOKIE_KEY_1,config.COOKIE_KEY_2],
}));
 
app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req,res,next){
     const isLoggedIn = req.isAuthenticated() && req.user;     
     if(!isLoggedIn) {
          return res.status(401).json({
               error: 'You must log in!'})
     }
     next()
}


app.get('/auth/google',
     passport.authenticate('google',{
          scope : ['email'],
     }));

app.get('/auth/google/callback',
     passport.authenticate('google',{
          failureRedirect: '/failure',
          successRedirect: '/',
          session : true,
     }), 
     (req, res) => {
          console.log('Google called us back!');
     });

app.get('/auth/logout',(req, res) =>{
     req.logout();
     return res.redirect('/');
});
app.get('/secret',checkLoggedIn, (req, res) =>{
     return res.send('Your sercert number is 42!');
});

app.get('/failure', (req, res) =>{
     return res.send('Failed to log in!');
});

app.get('/', (req, res) =>{
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https.createServer({
     key: fs.readFileSync('key.pem'),
     cert: fs.readFileSync('cert.pem')
},app).listen(PORT,()=>{
     console.log(`listening on port ${PORT} `);
}); 