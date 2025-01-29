const http  = require('http');
const mongoose = require('mongoose')

const {app}= require('./app')
const {loadPlanetsData} = require('./models/planets.model');

const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log('Mongo connection ready');
})

mongoose.connection.on('error',(err)=>{
    console.error(err)
})

const MONGO_URL = "mongodb://localhost:27017/nasa"

async function startServer() {
    await mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        
        useUnifiedTopology:true,
    })
    await loadPlanetsData();
}
startServer();

const PORT = process.env.PORT || 8000;


server.listen(5000,()=>{
    console.log(`listening on ${5000}`); 
})



