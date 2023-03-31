///PLANETS BY API-NINJAS FROM RAPID API

import fetch from 'node-fetch'
const planetName = document.querySelector("#name")
const planetMass = document.querySelector("#mass")
const planetRadius = document.querySelector("#radius")
const planetTemp = document.querySelector("temperature")

const url = 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=Mars';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2a3299c12cmsh515fa3887805e4fp1278c4jsn129695c86e54',
    'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(response => response.json())
	// .then(json => console.log(json))
    .then((data) => displayPanetData(data))
	.catch(err => console.error('error:' + err));

    function displayPanetData(data) {
        planetName.innerHTML = data.name
        planetMass.innerHTML = data.mass
        planetRadius.innerHTML = data.radius
        planetTemp.innerHTML = `${data.temperature}&deg;F`  
    }   

//END OF PLANETS BY API-NINJAS API