let questionObj = {
    qNumber: {question: "2+2", answer: [3,4,5,2],correct: 4}
}
//Dom manipulation
let questionNumber = 0;
let questionBlock = document.getElementById('question');
let optionBlock = document.getElementById('option');
let quizForm = document.getElementById('quizForm');
let startQuizBtn = document.getElementById("startQuiz");
startQuizBtn.addEventListener("click", function (event){
    event.preventDefault();
    questionNumber ++;
    questionBlock.innerHTML = `${questionNumber}. ${questionObj.qNumber.question}`;
   
    renderOption();
})


function renderOption(){
    questionObj.qNumber.answer.forEach((ans) =>{
        optionBlock.innerHTML += `<button onclick="checkMe(${ans})">${ans}</button>`
    })
    optionBlock.innerHTML += `<button>Next</button>`;
}
function checkMe(a){
    optionBlock.innerHTML = ' ';
    if (a === questionObj.qNumber.correct) {
        console.log('Correct answer');
    }else{
        console.log('wrong answer');
    }
    renderOption();
}
// quizForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     function checkMe(a=0){
        
//     }
// })
