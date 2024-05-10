const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//Use a template literal to print the original and modified string in a descriptive phrase.

let newStr = str.slice(3).concat(str.slice(0,3));
console.log(`orginal string is: ${str} \nThe new string is: ${newStr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters that you want to be relocated: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(userInput < str.length)
    {
        modifiedStr=str.slice(userInput).concat(str.slice(0,userInput));
        console.log(`orginal string is: ${str} \nThe new string is: ${modifiedStr}`);
    }
else
{
    console.log(`The number is longer than the word\nSo just moving 3 characters and result is: ${newStr}`);
}