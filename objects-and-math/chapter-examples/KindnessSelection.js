function randomSelection(choosenArray){
   let index = Math.floor(Math.random()*choosenArray.length);
   return choosenArray[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (let i = 0; i < 3; i++) {
  console.log("words "+i+": "+ randomSelection(words));
}

for (let i = 0; i < 3; i++) {
  console.log("Happiness "+i+": "+randomSelection(happiness));
}


function pickOneArray(words,happiness)
 {
   let choice = Math.random();
   if(choice < 0.5)
    {
    console.log("selected words array: "+ words);
    return words;
    }
    else{
    console.log("selected happiness array: "+ happiness);
    return happiness;
    }
 }

 let choosenArray = pickOneArray(words, happiness);

 for (i=0; i < 2; i++){
  console.log(randomSelection(choosenArray));
}

let newArray = [];
newArray.push(randomSelection(words));
newArray.push(randomSelection(happiness));
console.log(newArray);


 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 
