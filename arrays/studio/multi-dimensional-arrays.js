let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = food.split(',').sort().join(',');
let equipmentCabinet = equipment.split(',').sort().join(',');
let petsCabinet = pets.split(',').sort().join(',');
let sleepAidsCabinet = sleepAids.split(',').sort().join(',');

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet,petsCabinet,sleepAidsCabinet];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
 const info = require('readline-sync');
 let input = info.question("Enter a cabinet (0-3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(input >3 || input <1)
    {
        console.log(`Invalid input! select a number from 0 to 3`);
    }
else
    {
        console.log(`The contents of  cabinet ${input} is : ${cargoHold[input]}`);
    }
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let input2 = info.question("---BONUS!----\nEnter a cabinet (0-3): ");
let input3 = info.question("Enter a item: ");
if(input2 >3 || input2 <1)
    {
        console.log(`Invalid input! select a number from 0 to 3`);
    }
else
    {
        if(cargoHold[input2].includes(input3))
        {
            console.log(`Cabinet ${input2} DOES contain ${input3}.`);
        }
        else
        {
            console.log(`Cabinet ${input2} DOES NOT contain ${input3}.`);
        }
        
    }
