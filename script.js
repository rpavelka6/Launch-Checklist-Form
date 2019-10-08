// Write your JavaScript code here!

/* This block of code here shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
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
        pilotStatus.style.visibility = 'visible';
        copilotStatus.innerHTML += ` ${inputCoPilot.value}`;
        copilotStatus.style.visibility = 'visible';

        // Verify enough fuel to launch
        if (parseInt(inputFuelLevel.value)  < 10000) {
            // faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = 'Cargo weight low enough for launch';
            fuelStatus.innerHTML = 'Not enough fuel for the journey!';
            document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
            document.querySelector("h2").style.color = "red";
            event.preventDefault();

        }

        // Verify not too much weight to launch
        if (parseInt(inputCargoWeight.value) > 10000) {
           faultyItems.style.visibility = 'visible';
           fuelStatus.innerHTML = 'Fuel level high enough for launch';
           cargoStatus.innerHTML = 'Too much mass for shuttle to take off!';
           document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
           document.querySelector("h2").style.color = 'red';
           event.preventDefault();
       }
   });
});