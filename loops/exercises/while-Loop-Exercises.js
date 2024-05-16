//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel;
let numOfAstronauts;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
let info = require('readline-sync');
 startingFuelLevel= info.question("Enter the value for the starting Fuel Level:");
while( isNaN(startingFuelLevel) || startingFuelLevel <= 5000 || startingFuelLevel > 30000)
  {
    startingFuelLevel = info.question("Invalid input. Enter the value reater than 5000 but less than 30000.");
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numOfAstronauts = info.question("Enter the num of Astronauts:");
while(isNaN(numOfAstronauts) || numOfAstronauts < 0 || numOfAstronauts > 7)
  {
    numOfAstronauts = info.question("Invalid input. Enter an integer from 1 - 7.");
  }
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuelLevel-100 * numOfAstronauts >= 0) {
  altitude += 50;
  startingFuelLevel -= 100 * numOfAstronauts;
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let results= `The shuttle gained an altitude of ${altitude} km`;
if(altitude >= 2000)
  {
    results += " Orbit achieved!";
  }
  else 
  {
    results += " Failed to reach orbit";
  }
console.log(results);