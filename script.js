// Write your JavaScript code here!

// This block of code here shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// {   <ol>
//     <li>Name: ${}</li> json[2].name;
//     <li>Diameter: ${}</li> json[2].diameter;
//     <li>Star: ${}</li> json[2].star;
//     <li>Distance from Earth: ${}</li> json[2].distance;
//     <li>Number of Moons: ${}</li> json[2].moons;
// </ol>}

{/* <img src= ${};></img> */}

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then( function(json) {
        const destination = document.getElementById("missionTarget");
        // destination.innerHTML =
        //     planetName += ${json[2].name};
            // <ol>
            //     <li>planetName ${json[2].name}</li>
            //     <li>planetDiameter ${json[2].diameter}</li>
            //     <li>planetStar ${json[2].star}</li>
            //     <li>planetDistance ${json[2].distance}</li>
            //     <li>planetMoons ${json[2].moons}</li>
            // </ol>
            //    <img src=${json[0].image} height=250></img>
        //  `;
            planetName.innerHTML += ` ${json[2].name}`;
            planetDiameter.innerHTML += ` ${json[2].diameter}`;
            planetStar.innerHTML += ` ${json[2].star}`;
            planetDistance.innerHTML += ` ${json[2].distance}`;
            planetMoons.innerHTML += ` ${json[2].moons}`;
            destination.planetImage.innerHTML += `src=${json[2].image}`;
            console.log(planetImage.innerHtML);
        });
    });
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let inputPilot = document.querySelector("input[name=pilotName]");
        let inputCoPilot = document.querySelector("input[name=copilotName]");
        let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
        let inputCargoWeight = document.querySelector("input[name=cargoWeight]");

        // Check all inputs for validity
       if((typeof inputPilot.value) !== 'string') {
           alert("Pilot name must be a string");
           event.preventDefault();
       }      

       if((typeof inputCoPilot.value) !== 'string') {
           alert("Co-Pilot name must be a string");
           event.preventDefault();
       }
 
       if(isNaN(parseInt(inputFuelLevel.value))) {
           alert("Fuel Level must be a number");
           event.preventDefault();
       }

       if(isNaN(parseInt(inputCargoWeight.value))) {
           alert("Cargo Weight must be a number");
           event.preventDefault();
       }                
       if (inputPilot.value === "" || inputCoPilot.value === "" || inputFuelLevel.value === "" || inputCargoWeight.value === "") {
           alert("all fields must be entered");
           event.preventDefault();
       }
 
        // Display pilot and copilot names
        faultyItems.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot Ready ${inputPilot.value}`;
        copilotStatus.innerHTML += ` ${inputCoPilot.value}`;

        // Verify enough fuel to launch
        if (parseInt(inputFuelLevel.value)  < 10000) {
            cargoStatus.innerHTML = 'Cargo weight low enough for launch';
            fuelStatus.innerHTML = 'Not enough fuel for the journey!';
            document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
            document.querySelector("h2").style.color = "red";
            event.preventDefault();
        } else {

            // Verify not too much weight to launch
            if (parseInt(inputCargoWeight.value) > 10000) {
                faultyItems.style.visibility = 'visible';
                fuelStatus.innerHTML = 'Fuel level high enough for launch';
                cargoStatus.innerHTML = 'Too much mass for shuttle to take off!';
                document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
                document.querySelector("h2").style.color = 'red';
                event.preventDefault();
            } else {
                document.querySelector("h2").innerHTML = "Shuttle ready for launch";
                document.querySelector("h2").style.color = 'green';
                event.preventDefault();
            }
        }
   });
});