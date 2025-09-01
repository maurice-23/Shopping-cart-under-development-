// This code is for a simple number guessing game.
// The user has to guess a number between 0 and 10.
// The user has 5 attempts to guess the number correctly.
// After each guess, the user is informed whether they guessed correctly or not.        
const guessForm = document.getElementById('form');
let guessCount = 1;
guessForm.addEventListener("submit",function(event){
    // Prevent the default form submission behavior
    // This is important to prevent the page from reloading
    event.preventDefault();

    let guess = document.getElementById('guess').value;
    let randomNumber = Math.round(Math.random()*10);
    if (guess == randomNumber) {
        // If the guess is correct
        // Display a success message and the number of attempts
        document.getElementById('guess').value = "";
        document.getElementById('result').innerHTML = `You did it the number is ${randomNumber} ✅`;
        if (guessCount <= 5) {
            document.getElementById('times').innerHTML = `Wooooow did it in just ${guessCount} time(s). 🥇(Gold medal)`;
        }else if(guessCount <= 10){
            document.getElementById('times').innerHTML = `You hit only ${guessCount} times. 🥈 (Silver medal)`;
        }else{
            document.getElementById('times').innerHTML = `Took ${guessCount} times to guess. 🥉 (Bronze medal)`;
        }
        // Reset the guess count for the next game
        guessCount = 1;
        
    }else{
        //in case didn't work out
        document.getElementById('result').innerHTML = `Retry number was ${randomNumber}. better lucky next time..`;
        guessCount ++;
        document.getElementById('times').innerHTML = " ";
        
    }
    
})