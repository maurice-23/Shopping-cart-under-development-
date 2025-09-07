
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


const form = document.getElementById('submitBtn');

form.addEventListener("click", function(event){
    let arrayHr =` ${timeArray[0]}${timeArray[1]}`;
    let arrayMin =` ${timeArray[2]}${timeArray[3]}`;
    let arraySec =` ${timeArray[4]}${timeArray[5]}`;
    arrayHr = Number(arrayHr);
    arrayMin = Number(arrayMin);
    arraySec = Number(arraySec);
    event.preventDefault();
    let seconds = arraySec;
    let minutes = arrayMin;
    let hr = arrayHr;
    if (seconds >= 60) {
        minutes ++;
        seconds = seconds%60;
    }
    if (minutes >= 60) {
        hr ++;
        minutes = minutes%60;
    }
    
    let timer = document.getElementById('timer');
    function renderTime(){
        timer.innerHTML = `${hr}h ${minutes}m ${seconds}s`;
    }
    let countDown = setInterval(() => {
        
        if (seconds > 0) {
            seconds --; 
        }else{
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            }else if (hr > 0) {
                    hr--;
                    minutes = 59;
                    seconds = 59;
                }else{
                    clearInterval(countDown);
                    timer.innerHTML = "Time is up";
                    return;
                }
            
        }
            renderTime();
        }, 1000);
})