import * as fs from 'fs';
import * as https from 'https';
import express from "express"

import leadRoute from './lead.route.js';
import connectDb from './database/connect.database.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', leadRoute);

https.createServer({
     key: fs.readFileSync('key.pem'),
     cert: fs.readFileSync('cert.pem')
},app).listen(PORT,()=>{
     console.log(`listening on port ${PORT} `);
});