let questionObj = {
    question: "2+2",
    answer: [3,4,5,2]
}
//Dom manipulation
let questionNumber = 0;
let questionBlock = document.getElementById('question');
let optionBlock = document.getElementById('option');

let startQuizBtn = document.getElementById("startQuiz");
startQuizBtn.addEventListener("click", function (event){
    event.preventDefault();
    questionNumber ++;
    questionBlock.innerHTML = `${questionNumber}. ${questionObj.question}`;
    renderOption();
})

function renderOption(){
    for (let i = 0; i < questionObj.answer.length; i++) {
        optionBlock.innerHTML += `<p>${questionObj.answer[i]}</p>`;
        
    }
}