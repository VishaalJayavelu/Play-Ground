const express = require('express')
const morgan = require('morgan')
const route = require('./route/route')

const apiErrorHandler = require('./error/apiErrorHandler')
require('dotenv').config


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("tiny"))

app.use('/', route)
app.use(apiErrorHandler)

app.listen(PORT, () =>{
     console.log(`Server running on port ${PORT}`)
})
