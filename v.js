let questionObj = {
  qNumber: { question: "2+2", answer: [3, 4, 5, 2], correct: 4 },
  qNumber1: { question: "2+3", answer: [5, 1, 0, 2], correct: 5 }
};

let questionNumber = 0;
let questionBlock = document.getElementById("question");
let optionBlock = document.getElementById("option");
let quizForm = document.getElementById("quizForm");
let startQuizBtn = document.getElementById("startQuiz");
let nextquetion = 0;
let correctAnswer = 0;
const objectOg = Object.values(questionObj);
const checcc = objectOg[nextquetion];

startQuizBtn.addEventListener("click", function (event) {
  event.preventDefault();
  questionNumber++;
  questionBlock.innerHTML = `${questionNumber}. ${checcc.question}`;
//   startQuizBtn.style.display = 'none';
    renderOption();
});

function renderOption() {
    checcc.answer.forEach((ans) => {
    optionBlock.innerHTML += `<button id='mybutton${ans}' onclick="checkMe(${ans})">${ans}</button>`;
  });
//   optionBlock.innerHTML += `<button id='startQuiz'>Next</button>`;
  nextquetion++;
}

function checkMe(a) {
  optionBlock.innerHTML = " ";
  renderOption();
  let allButton = optionBlock.querySelector("button");

  let mybutton = document.getElementById(`mybutton${a}`);
  if (a === checcc.correct) {
    correctAnswer++;
    disableButtons();
  } else {
    mybutton.style.backgroundColor = "crimson";
    mybutton.style.color = "white";
    disableButtons();
  }
}

function disableButtons() {
  for (let i = 0; i < checcc.answer.length; i++) {
    let itera = checcc.answer[i];
    let button = document.getElementById(`mybutton${itera}`);
    if (checcc.answer[i] == checcc.correct) {
      document.getElementById(`mybutton${itera}`).style.backgroundColor = 'lightgreen';
      document.getElementById(`mybutton${itera}`).style.color = 'black';
    }
    button.disabled = true;
  }
}

    
    