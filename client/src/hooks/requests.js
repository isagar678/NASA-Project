const API_URL = `http://localhost:5000/`
// Load planets and return as JSON.
async function httpGetPlanets() {
  
    const response = await fetch(`http://localhost:5000/planets`)
    return response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
 const response = await fetch(`http://localhost:5000/launches`)
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b)=>a.flightNumber-b.flightNumber)
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`http://localhost:5000/launches`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(launch),
  
    })
  } catch (error) {
    return {
      ok: false,
    }
  }


}
// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`http://localhost:5000/launches/${id}`,{
      method:"delete"
    })
  } catch (error) {
    console.log(error);
    return{
      ok:false,
    }
  }
  
}

module.exports = {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};