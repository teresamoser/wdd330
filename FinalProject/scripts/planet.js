///PLANETS INFO BY NEWBAPI FROM RAPID API

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/");
xhr.setRequestHeader("X-RapidAPI-Key", "2a3299c12cmsh515fa3887805e4fp1278c4jsn129695c86e54");
xhr.setRequestHeader("X-RapidAPI-Host", "planets-info-by-newbapi.p.rapidapi.com");

xhr.send(data);

console.log("You have connected...")
document.addEventListener("DOMContentLoaded", () =>  {

    let generateBtn = document.querySelector("#generate-planet");
    generateBtn.addEventListener("click", renderEverything)

    getDeleteBtn().addEventListener("click", deleteEverything);
  })
    function renderEverything(){
      let allPlanetsContainer = document.querySelector("#planet-container")
      allPlanetsContainer.innerText = "";
      fetchPlanets();

      getDeleteBtn().style.display = "block"

    }
    function getDeleteBtn(){
      return document.querySelector("#delete-btn")
    }

    function fetchPlanets(){
      fetch(data)
      .then(response => response.json())
      .then(function(allplanets){
          allplanets.results.forEach(function(planet){
            fetchPlanets(planet);
          })
      })
    }
    
    function fetchPlanetData(planet){
      let url = planet.url

      fetch(url)
      .then(response => response.json())
      .then(function(data){ 
          renderPlanets(data)
      })
    }

function renderPlanets(data){
    let allPlanetsContainer = document.getElementById("planet-container");
    let planetContatiner = document.createElement("div")  // div will be used to hold the data/details for individual planets.

    createPlanetImage(planetData.planetOrder, planetContatiner);

    let planetName = document.createElement("h4")
    planetName.innerText = data.name

    let planetOrder = document.createElement("p")
    planetOrder.innerText = `#${data.planetOrder}`

    let planetDescription = document.createElement("p")
    planetDescription.innerText = `#${data.description}`

    let planetVolume = document.createElement("p")
    planetVolume.innerText = `#${data.volume}`

    let planetMass = document.createElement("p")
    planetMass.innerText = `#${data.mass}`

    let planetTypes = document.createElement("ul")  //ul list will hold the planet types

    createTypes(planetData.types, planetTypes) //helper function to go through the types array and create li tags fro each one

    planetContatiner.append(planetName, planetOrder, planetDescription, planetVolume, planetMass);
      //appending all details to the planetContainner div

    allPlanetsContainer.appendChild(planetContatiner);
    //appending that planetContainer div to the main div which will hold all the planet cards
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement("li");
        typeLi.innerText = type["type"]["name"];
        ul.append(typeLi)
    })
}

  function createPlanetImage(planetOrder, planetContainerDiv){
    let planetImageContainer = document.createElement("div")
    planetImageContainer.classList.add("image")

    let planetImage = document.createElement("img")
    planetImage.srcset = `#${data.img}`

    planetImageContainer.append(planetImage);
    planetContainerDiv.append(planetImageContainer);
    
  }

  function deleteEverything(event){
    event.target.style = "none";
    let allPlanetsContainer = document.querySelector("#planet-container")
    allPlanetsContainer.innerText = ""

    let generateBtn = document.createElement("button")
    generateBtn.innerText = "Generate Planet"
    generateBtn.planetOrder = "generate-planet"
    generateBtn.classList.add("ui", "secondary", "button")
    generateBtn.addEventListener("click", renderEverything);

    allPlanetsContainer.append(generateBtn)

  }
//END OF PLANETS INFO BY NEWBAPI API
//KEY  2a3299c12cmsh515fa3887805e4fp1278c4jsn129695c86e54