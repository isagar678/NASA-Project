const API_URL = `http://localhost:5000/`
// Load planets and return as JSON.
async function httpGetPlanets() {
  
    const response = await fetch(`http://localhost:5000/planets`)
    console.log(response);
    return response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
 const response = await fetch(`http://localhost:5000/launches`)
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b)=>a.flightNumber-b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};