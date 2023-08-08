//Importing Express , path , Body-Parser & Multer Module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Router Configuration
const formRouter = require('./routes/form.router')
const app = express();
//View Configuration
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
//Parsing application/json
app.use(bodyParser.json());
//Parsing application/xwxx
app.use(bodyParser.urlencoded({extended: true}));
//Port Configuration
const PORT = 5050;
//Middleware Configuration
app.use((req, res, next)=>{
     const start = Date.now();
     next();
     const takentime = Date.now() - start;
     console.log(`${req.method} : ${req.protocol}://${req.get('host')}${req.originalUrl} --> ${takentime}`);
     next();
});

app.use(express.static(path.join(__dirname,'./views/js/index.js')));
app.use('/form', formRouter);
app.use('/',(req,res)=>{})

app.listen(PORT, ()=>{
     console.log('listening on port ' + PORT);
});
