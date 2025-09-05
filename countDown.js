
let timeArray = [0,0,0,0,0,0];
function render(){
    document.getElementById('timer').innerHTML = `${timeArray[0]}${timeArray[1]}hr ${timeArray[2]}${timeArray[3]}m ${timeArray[4]}${timeArray[5]}s`;
}

// Passing value in

function passValue(realValue) {
    console.log(realValue);
}
