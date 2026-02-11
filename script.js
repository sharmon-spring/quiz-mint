const questions = [
  {
    question: "問題１",
    answers: ["あ", "い", "う", "え"],
    correct: 0
  },
  {
    question: "問題２",
    answers: ["1", "2", "3", "4"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
});

  resultElement.textContent = "";
}

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const correctIndex = questions[currentQuestionIndex].correct;

    if (index === correctIndex) {
      resultElement.textContent = "正解！";
      score++;
      scoreElement.textContent = score;
    } else {
      resultElement.textContent = "不正解...";
    }
  });
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.textContent = "クイズ終了！";
    resultElement.textContent = "最終スコア: " + score;
    nextButton.style.display = "none";
  }
});

showQuestion();
