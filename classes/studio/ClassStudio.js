//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
constructor(name,mass,scores){
    this.name =name;
    this.mass = mass;
    this.scores = scores;
}
addScore(score){
   this.scores.push(score); 
}

average(){
    let sum = 0, average;
    for(let i = 0;i< this.scores.length; i++)
    {
        sum = sum+ this.scores[i];
    }
    average = sum/ this.scores.length;
    return average.toFixed(1);
}

status(){
const average = this.average();
if(average >= 90)
    return 'Accepted';
else if( average >= 80)
    return 'Reserve';
else if(average >=70)
    return 'Probationary';
else
    return 'Rejected';

}

}


const objBubbaBear = new CrewCandidate('Bubba bear',135, [88,85,90]);
const objMerryMaltese = new CrewCandidate('Merry Maltese',1.5,[93,88,97]);
const objGladGator = new CrewCandidate('Glad Gator',225,[75,78,62]);

objBubbaBear.addScore(83);
console.log(objGladGator.average());



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
objGladGator.addScore(97);
objGladGator.addScore(90);
objGladGator.addScore(98);
objGladGator.addScore(100);
objGladGator.addScore(98);
objGladGator.addScore(98);
objGladGator.addScore(98);
objGladGator.addScore(91);
objGladGator.addScore(100);
console.log(`${objGladGator.name} earned an average test score of ${objGladGator.average()} and has a status of ${objGladGator.status()} `);
