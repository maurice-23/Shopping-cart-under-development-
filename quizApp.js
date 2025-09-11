let questionObj = {
    qNumber: {question: "2+2", answer: [3,4,5,2],correct: 4}
}
//Dom manipulation
let questionNumber = 0;
let questionBlock = document.getElementById('question');
let optionBlock = document.getElementById('option');
let quizForm = document.getElementById('quizForm');
let startQuizBtn = document.getElementById("startQuiz");
let correctAnswer = 0;
startQuizBtn.addEventListener("click", function (event){
    event.preventDefault();
    questionNumber ++;
    questionBlock.innerHTML = `${questionNumber}. ${questionObj.qNumber.question}`;
   
    renderOption();
})

function renderOption(){
    questionObj.qNumber.answer.forEach((ans) =>{
        let customid = 1;
        optionBlock.innerHTML += `<button id='mybutton${ans}' onclick="checkMe(${ans})">${ans}</button>`
        tmpId = 'mybutton';
    })
    optionBlock.innerHTML += `<button id='next'>Next</button>`;
    
}


function checkMe(a){

    optionBlock.innerHTML = ' ';
    renderOption();

    
    let mybutton = document.getElementById(`mybutton${a}`);
    if (a === questionObj.qNumber.correct) {
        console.log("Correct answer")
        mybutton.style.backgroundColor = 'green';
        mybutton.style.color = 'white';
        disableButton();
    }else{
        console.log('wrong answer');
        disableButton();
    }
    
}

function disableButton(){
   let buttons = document.getElementById('option').querySelector('button');
    buttons.disabled = true;

}