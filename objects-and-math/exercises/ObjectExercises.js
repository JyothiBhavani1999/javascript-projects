let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function(){ return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){ return Math.floor(Math.random()*11)}
};

let brad = {
   name: "Brad",
   species: "Chimpanzee	",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(){ return Math.floor(Math.random()*11)}
};

let leroy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function(){ return Math.floor(Math.random()*11)}
};

let almina = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function(){ return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, brad, leroy, almina];


function crewReports(a)
{
   console.log(`${a.name} is a ${a.species} . They are ${a.age}  years old and ${a.mass} kilograms. Their ID is ${a.astronautID}.`);
}

crewReports(almina);

function fitnessTest(crew){
   let finalArray = [];
for(let i =0;i< crew.length;i++)
   {
      let numOfSteps = 0;
      let steps = 0;
      
      while(numOfSteps < 20)
         {
            numOfSteps = numOfSteps + crew[i].move();
            steps= steps+1;
         }
         finalArray.push(`${crew[i].name} took ${steps} steps to reach 20.`);
   }
   return finalArray;
}

console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
