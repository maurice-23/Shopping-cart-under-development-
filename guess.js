const guessForm = document.getElementById('form');
let guessCount = 1;
guessForm.addEventListener("submit",function(event){
    event.preventDefault();

    let guess = document.getElementById('guess').value;
    let randomNumber = Math.round(Math.random()*10);
    if (guess == randomNumber) {
        document.getElementById('result').innerHTML = `You did it the number is ${randomNumber} ✅`;
        if (guessCount <= 5) {
            document.getElementById('times').innerHTML = `Wooooow did it in just ${guessCount} time(s). 🥇(Gold medal)`;
        }else if(guessCount <= 10){
            document.getElementById('times').innerHTML = `You hit only ${guessCount} times. 🥈 (Silver medal)`;
        }else{
            document.getElementById('times').innerHTML = `Took ${guessCount} times to guess. 🥉 (Bronze medal)`;
        }
        guessCount = 1;
        
    }else{
        
        document.getElementById('result').innerHTML = `Retry number was ${randomNumber}. better lucky next time..`;
        guessCount ++;
        document.getElementById('times').innerHTML = " ";
        
    }
    
})