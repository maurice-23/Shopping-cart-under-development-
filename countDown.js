
/*
console.log('here for checkup');
document.getElementById('number1').addEventListener("click",function(event){
    event.preventDefault();
    let myValue = document.getElementById('number1').value;
    console.log(myValue);
    addNumber(myValue);

});

function addNumber(a){
    document.getElementById('hrs').innerHTML = a;
} 
*/

// let seconds = document.getElementById("secs");
let timeArray = [0,0,0,0,0,0];
document.getElementById('hrs').innerHTML = timeArray[0] + timeArray[1];
document.getElementById('number1').addEventListener("click", function(event){
    event.preventDefault();
    let numberValue = document.getElementById('number1').value;
    passSeconds(numberValue);

})

function passSeconds(seconds){
    document.getElementById("secs").innerHTML = `0${seconds}s`;
    console.log(seconds);
}
