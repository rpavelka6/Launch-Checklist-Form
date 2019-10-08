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
       if((typeof inputPilot.value) !== 'string') {
           alert("Pilot name must be a string");
       }      
       let inputCoPilot = document.querySelector("input[name=copilotName]");
       if((typeof inputCoPilot.value) !== 'string') {
           alert("Co-Pilot name must be a string");
       }
       let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
       if(isNaN(parseInt(inputFuelLevel.value))) {
           alert("Fuel Level must be a number");
       }
       let inputCargoWeight = document.querySelector("input[name=cargoWeight]");
       if(isNaN(parseInt(inputCargoWeight.value))) {
           alert("Cargo Weight must be a number");
       }                
       if (inputPilot.value === "" || inputCoPilot.value === "" || inputFuelLevel.value === "" || inputCargoWeight.value === "") {
           alert("all fields must be entered");
           event.preventDefault();
       }
      //  alert("List submitted");
       let list = document.getElementById("launchStatusList");
       pilotStatus.innerHTML += ` ${inputPilot.value}`;
       pilotStatus.style.visibility = 'visible';
       copilotStatus.innerHTML += ` ${inputCoPilot.value}`;
       copilotStatus.style.visibility = 'visible';
       fuelStatus.innerHTML += ` ${inputFuelLevel.value}`;
       fuelStatus.style.visibility = 'visible';
       cargoStatus.innerHTML += ` ${inputCargoWeight.value}`;
       cargoStatus.style.visibility = 'visible';
   });
});