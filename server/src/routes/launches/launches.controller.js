const {getAllLaunches} = require('../../models/launches.model')
function httpGetAllLaunches(req,res) {
    return res.json(Array.from(launches.values()))
}
module.exports={httpGetAllLaunches}