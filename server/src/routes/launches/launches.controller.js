const {launches} = require('../../models/launches.model')
function getAllLaunches(req,res) {
    return res.json(Array.from(launches.values()))
}
module.exports={getAllLaunches}