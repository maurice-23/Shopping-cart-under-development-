
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
// document.getElementById('number1').addEventListener("click", function(event){
//     event.preventDefault();
//     let numberValue = document.getElementById('number1').value;
//     passSeconds(numberValue);

// })

// function passSeconds(seconds){
//     document.getElementById("secs").innerHTML = `0${seconds}s`;
//     console.log(seconds);
// }
let timeArray = [0,0,0,0,0,0];
function render(){
    document.getElementById('timer').innerHTML = `${timeArray[0]}${timeArray[1]}hr ${timeArray[2]}${timeArray[3]}m ${timeArray[4]}${timeArray[5]}s`;
}
render();