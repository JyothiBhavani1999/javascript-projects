// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeed = 17500; // speed in mph
let distanceToMars = 225000000; // distance in km
let distanceToTheMoon = 384400 // distance to moon in km
const milesPerKm = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToTheMoon);
console.log(typeof milesPerKm);


// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKm ;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(spaceShuttleName+" will take "+daysToMars+" days to reach Mars.");

// Calculate a trip to the moon below
let milesToTheMoon = distanceToTheMoon * milesPerKm;
let hoursToTheMoon = milesToTheMoon / shuttleSpeed;
let daysToTheMoon = hoursToTheMoon /24;

// Print the results of the trip to the moon below
console.log(spaceShuttleName+" will take "+daysToTheMoon+" days to reach the Moon.");