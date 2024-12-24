const planets=[];
function getAllPlanets(req,res) {
    res.status(200).json(planets)
}