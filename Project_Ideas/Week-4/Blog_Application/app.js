//importing modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//importing Routes
const allBlogsRouter = require('./routes/allBlogs.route');
const BlogRouter = require('./routes/blog.route');
const sigInRouter = require('./routes/signIn.route');
const sigUpRouter = require('./routes/signUp.route');
//configuring Port & express
const app = express();

app.use('/',(req,res,next)=>{
     const start = Date.now();
     next();
     const difftime = Date.now() - start;
     console.log(`${req.method} ${req.url} ${difftime}ms`);
});
// configuration of view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public'));

//Parsing application/json & application/xwxx
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Configuring express to use json and static files from public
app.use(express.json());

// Configuring Route paths
app.use('/', allBlogsRouter);
app.use('/SignIn', sigInRouter);
app.use('/SignUp', sigUpRouter);
app.use('/blog', BlogRouter);


//seting express to listen in configuerd port
module.exports = app;