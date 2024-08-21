// Write your JavaScript code here.
// Remember to pay attention to page loading!
 
window.addEventListener('load', () => {

const takeoff = document.getElementById('takeoff');
const landing = document.getElementById('landing');
const missionAbort = document.getElementById('missionAbort');
const flightStatus = document.getElementById('flightStatus');
const flightScreen = document.getElementById('shuttleBackground');
const shuttleHeight = document.getElementById('spaceShuttleHeight');
const shuttleWidth = 0;
const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');
const rocket = document.getElementById('rocket');
rocket.style.position = "absolute";
rocket.style.left = "0px";
rocket.style.bottom= "0px";

takeoff.addEventListener('click', function(){
    if(window.confirm('Confirm that the shuttle is ready for takeoff.')){
        flightStatus.innerHTML = 'Shuttle in flight.';
        flightScreen.style.backgroundColor ='blue';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+ 10000;
        rocket.style.bottom = "10px";

    }
});

landing.addEventListener('click', function(){
    if(window.confirm('The shuttle is landing. Landing gear engaged.')){
        flightStatus.innerHTML = 'The shuttle has landed.';
        flightScreen.style.backgroundColor ='green';
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";

    }
});

missionAbort.addEventListener('click', function(){
    if(window.confirm('Confirm that you want to abort the mission.')){
        flightStatus.innerHTML = 'Mission aborted.';
        flightScreen.style.backgroundColor ='green';
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
        rocket.style.left = "0px";

    }
});

up.addEventListener("click", () =>{
    if(shuttleHeight.innerHTML < 240000)
    {
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 +'px';
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    }

});

down.addEventListener("click", () =>{
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 +'px';
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;

});

left.addEventListener("click", () =>{
    if(shuttleWidth > 0)
    {
    rocket.style.left = parseInt(rocket.style.left) - 10 +'px';
    }
});


right.addEventListener("click", () =>{
    rocket.style.left = parseInt(rocket.style.left) + 10 +'px';

});



    
});


