
let timeArray = [0,0,0,0,0,0];

const keyButton = document.querySelectorAll('.keyBoard button');

keyButton.forEach(button => {
    button.addEventListener('click', function(event){
        event.preventDefault();
        if (this.value == 'del') {
            timeArray.pop();
            timeArray.unshift(0);
            render();
        }else if (timeArray[0]==0) {
            move(this.value);
        }
    })
})
function move(a) {
    let oldArray = [...timeArray];
    oldArray.forEach((value,i) => {
        if (i < timeArray.length-1) {
            timeArray[i] = oldArray[i + 1];
        }
    })
    timeArray[timeArray.length - 1] = a;
    render();
}
function render(){
    document.getElementById('timer').innerHTML = `${timeArray[0]}${timeArray[1]}h ${timeArray[2]}${timeArray[3]}m ${timeArray[4]}${timeArray[5]}s`;
}

