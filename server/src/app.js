const express = require('express')
const cors = require('cors')
const path = require('path');
const morgan = require('morgan')
const {planetsRouter} = require('./routes/planets/planets.router')


const app =express();

app.use(cors(
    {
        origin: `http://localhost:3000`
    }
))
app.use(morgan('combined'))

app.use(express.json())
app.use('/',planetsRouter)
app.use(express.static(path.join(__dirname,'..','public')))
module.exports={
    app
}