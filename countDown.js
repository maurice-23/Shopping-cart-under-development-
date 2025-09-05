
let timeArray = [0,0,0,0,0,0];
let changeTo = timeArray.length-1;
let next = changeTo - 1;
// let bestValue;


function render(){
    // console.log(timeArray);
    document.getElementById('timer').innerHTML = `${timeArray[0]}${timeArray[1]}hr ${timeArray[2]}${timeArray[3]}m ${timeArray[4]}${timeArray[5]}s`;
}
const keyButton = document.querySelectorAll('.keyBoard button');

keyButton.forEach(button => {
    button.addEventListener('click', function(event){
        event.preventDefault();
        move(this.value);
    })
})

function move(a) {
   let oldArray = [...timeArray];
   oldArray.forEach((value,i) => {
    if (i < timeArray.length - 1) {
        timeArray[i] = oldArray[i + 1];
    }
   })
   timeArray[timeArray.length - 1] = a;
   render();
}
// function move(a){
//     timeArray[timeArray.length-1] = 0;
//     timeArray[next] = a;
//     next --;
// }

