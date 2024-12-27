const {getAllPlanets} = require('../../models/planets.model')
function httpGetAllPlanets(req,res) {
    console.log('getting planets');
    return res.status(200).json(getAllPlanets())
} 

module.exports={
    httpGetAllPlanets
} 