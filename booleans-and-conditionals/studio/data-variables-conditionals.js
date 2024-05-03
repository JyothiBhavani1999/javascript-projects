// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount <=7)
{
    console.log("astrounts count is no greater than 7");
}else{
    console.log("Conditions are not met. Abort launch!");
    return 0;
}
// add logic below to verify all astronauts are ready
if(astronautStatus)
{
    console.log("Astronauts are ready");
}
else{
    console.log("Conditions are not met. Abort launch!");
    return 0;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg < maximumMassLimit)
{
    console.log("totalMassKg is less than maximumMassLimit");
}else{
    console.log("Conditions are not met. Abort launch!");
    return 0;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius >= -300 || fuelTempCelsius <= -150 )
{
    console.log("Temp is withung the range");
}else{
    console.log("Conditions are not met. Abort launch!");
    return 0;
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel === "100%")
{
    console.log("fuel is 100%");
}else{
    console.log("Conditions are not met. Abort launch!");
    return 0;
}
// add logic below to verify the weather status is clear
if (weatherStatus == "clear") {
    console.log("yes weather is clear \n");
}else{
    console.log("Conditions are not met. Abort launch!");
    return 0;
}

// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftOff)
{
console.log("All systems are a go! Intiatting space shuttle launch sequence.");
console.log("---------------------------------------------------------------");
console.log("Date: ",date);
console.log("Time: ",time);
console.log("Astronaut count: ",astronautCount);
console.log("Crew Mass: ",crewMassKg, " kg");
console.log("Fuel MAss: ",fuelMassKg, " kg");
console.log("Shuttle Mass: ",shuttleMassKg, " kg");
console.log("Total Mass: ",totalMassKg, " kg");
console.log("Fuel Temperature: ",fuelTempCelsius, " C");
console.log("Weather Status: ", weatherStatus);
console.log("---------------------------------------------------------------");
console.log("Have a safe trip astronauts!");
}
else{
    console.log("Systems are not ready!!")
}