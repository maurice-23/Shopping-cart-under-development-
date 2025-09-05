
let timeArray = [0,0,0,0,0,0];

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
function render(){
    document.getElementById('timer').innerHTML = `${timeArray[0]}${timeArray[1]}hr ${timeArray[2]}${timeArray[3]}m ${timeArray[4]}${timeArray[5]}s`;
}

