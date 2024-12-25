const {planets} = require('../../models/planets.model')
function getAllPlanets(req,res) {
    console.log('getting planets');
    return res.status(200).json(planets)
} 

module.exports={
    getAllPlanets
}