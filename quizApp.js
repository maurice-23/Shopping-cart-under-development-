let questionObj = {
  qNumber: { question: "2+2", answer: [3, 4, 5, 2], correct: 4 },
  qNumber1: { question: "2+3", answer: [3, 4, 5, 2], correct: 4 }
};


//Dom manipulation
let questionNumber = 0;
let questionBlock = document.getElementById("question");
let optionBlock = document.getElementById("option");
let quizForm = document.getElementById("quizForm");
let startQuizBtn = document.getElementById("startQuiz");
let correctAnswer = 0;
startQuizBtn.addEventListener("click", function (event) {
  event.preventDefault();
  performTask()
});
function performTask(){
  questionNumber++;
  questionBlock.innerHTML = `${questionNumber}. ${questionObj.qNumber.question}`;
  startQuizBtn.style.display = 'none'
  renderOption();
}

function renderOption() {
  questionObj.qNumber.answer.forEach((ans) => {
    optionBlock.innerHTML += `<button id='mybutton${ans}' onclick="checkMe(${ans})">${ans}</button>`;
  });
  optionBlock.innerHTML += `<button id='next'>Next</button>`;
  document.getElementById('next').addEventListener('click', function (event){
  event.preventDefault();
    questionNumber ++;
    let nextQuestionIndex = questionNumber - 2;
    const objectOg = Object.values(questionObj);
    const checcc = objectOg[1];
    const anotherC = Object.values(checcc);
    questionBlock.innerHTML = `${questionNumber}. ${objectOg[1].question}`;
  });
}

function checkMe(a) {
  optionBlock.innerHTML = " ";
  renderOption();
  let allButton = optionBlock.querySelector("button");

  let mybutton = document.getElementById(`mybutton${a}`);
  if (a === questionObj.qNumber.correct) {
    correctAnswer++;
    disableButtons();
  } else {
      mybutton.style.backgroundColor = "crimson";
      mybutton.style.color = "white";
      disableButtons();
    }
}

function disableButtons() {
  for (let i = 0; i < questionObj.qNumber.answer.length; i++) {
    let itera = questionObj.qNumber.answer[i];
    let button = document.getElementById(`mybutton${itera}`);
    if (questionObj.qNumber.answer[i] == questionObj.qNumber.correct) {
      document.getElementById(`mybutton${itera}`).style.backgroundColor = 'lightgreen';
      document.getElementById(`mybutton${itera}`).style.color = 'black';
    }
    button.disabled = true;
  }
}


