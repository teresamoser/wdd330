///PLANETS INFO BY NEWBAPI FROM RAPID API
console.log("You have connected...")

document.addEventListener("DOMContentLoaded", () =>  {
    
  // GENERATE BUTTON FOR DISPLAYING THE PLANETS CARDS
    let generateBtn = document.querySelector("#generate-planet");
    generateBtn.addEventListener("click", renderEverything)
   
    //DELETE BUTTON TO RESET THE PAGE 
    getDeleteBtn().addEventListener("click", deleteEverything);
    })

    //RENDER EVERYTHING WILL DISPLAY ALL THE PLANET CARDS
function renderEverything(){
    let allPlanetsContainer = document.querySelector("#planet-container")
    allPlanetsContainer.innerText = "";
    fetchPlanets();

    getDeleteBtn().style.display = "block"
    }

function getDeleteBtn(){
    return document.querySelector("#delete-btn")
    }


// CODE FROM PLANETS API

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2a3299c12cmsh515fa3887805e4fp1278c4jsn129695c86e54',
// 		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
// 	}
// };

// fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    //END OF CODE FROM API

    //CALL THE PLANET API USING KEY FROM RAPIDAPI PLANETS
function fetchPlanets(){
    fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',{
      'method': 'GET',
      'headers': {
        'X-RapidAPI-Key': '2a3299c12cmsh515fa3887805e4fp1278c4jsn129695c86e54',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
         }
      })

      //TRANSFORM INFORMATION RECIEVED FROM PLANET DATA ARRAY INTO JSON DATA
      console.log()
      .then(response => response.json())
      .then(function(allplanets){
          allplanets.results.forEach(function(planet){
            fetchPlanetData(planet);
          });
      });
    }

     // THIS FUNCTION WILL FETCH THE INDIVIDUAL TYPES, OR INFO OF 
     // EACH PLANET DATA ARRAY AND THEN TRANSFER INTO JSON DATA
function fetchPlanetData(planet){
    let url = planet.url

    fetch(url)
      .then(response => response.json())
      .then(function(planetData){ 
          renderPlanets(planetData)
      })
    }

    //SET UP THE ELEMENTS IN THE HTML FOR PLANETS DATA RECEIVED
function renderPlanets(planetData){
    let allPlanetsContainer = document.getElementById("planet-container");
    let planetContatiner = document.createElement("div")  // div will be used to hold the data/details for individual planets.
    planetContatiner.classList.add("ui", "card");

    createPlanetImage(planetData.planetOrder, planetContatiner);

    let planetName = document.createElement("h4")
    planetName.innerText = planetData.name

    let planetOrder = document.createElement("p")
    planetOrder.innerText = `#${planetData.planetOrder}`

    let planetDescription = document.createElement("p")
    planetDescription.innerText = `#${planetData.description}`

    let planetVolume = document.createElement("p")
    planetVolume.innerText = `#${planetData.volume}`

    let planetMass = document.createElement("p")
    planetMass.innerText = `#${planetData.mass}`

    let planetTypes = document.createElement("ul") 
      //UL LIST WILL HOLD THE PLANET TYPES

    createTypes(planetData.types, planetTypes) 
      //HELPER FUNCTION TO GO THROUGH THE TYPES ARRAY AND CREATE LI TAGS FOR EACH ONE
    
    planetContatiner.append(planetName, planetOrder, planetDescription, planetVolume, planetMass, planetTypes);
      //APPENDING ALL DETAILS TO THE PLANETCONTAINER DIV

    allPlanetsContainer.appendChild(planetContatiner); 
      //APPENDING THE PLANETCONTAINER DIV TO THE MAIN DIV 
      //WHICH WILL HOLD ALL THE PLANET CARDS

}   
     //TYPES ARE LISTED UNDER PLANET IMAGE
function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement("li");
        typeLi.innerText = type["type"]["name"];
        ul.append(typeLi)
    })
}
    //PULL IMAGE FROM PLANET API 
function createPlanetImage(planetOrder, containerDiv){
    let planetImgContainer = document.createElement("div")
    planetImgContainer.classList.add("image")

    let planetImage = document.createElement("img")
    planetImage.srcset = `#${planetData.img}`

    planetImgContainer.append(planetImage);
    containerDiv.append(planetImgContainer); 
  }

  //THIS FUNCTION WILL REMOVE EVERYTHING FROM THE PAGE VIEW
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