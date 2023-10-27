const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRouter = require('./route/auth.routes')

require('dotenv').config();
const config = {
     CLIENT_ID : process.env.CLIENT_ID,
     CLIENT_SECRETS : process.env.CLIENT_SECRETS,
     COOKIE_KEY_1 : process.env.COOKIE_KEY_1,
     COOKIE_KEY_2 : process.env.COOKIE_KEY_2
};

const PORT = process.env.PORT || 3000;
const app= express();
app.use((req, res, next) => {
     console.log('req.Url: ' + req.url)
     next()
})
app.use(helmet());
require('./middleware/passport.middleware');

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

app.use('/auth',authRouter);

app.get('/secret',checkLoggedIn, (req, res) =>{
     return res.send('Your sercert number is 42!');
});

app.get('/failure', (req, res) =>{
     return res.send('Failed to log in!');
});

app.get('/', (req, res) =>{
     res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

https.createServer({
     key: fs.readFileSync('key.pem'),
     cert: fs.readFileSync('cert.pem')
},app).listen(PORT,()=>{
     console.log(`listening on port ${PORT} `);
});