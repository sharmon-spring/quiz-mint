const questions = [
  {
    question: "日本の首都は？",
    answers: ["北海道", "東京", "京都", "沖縄"],
    correct: 1
  },
  {
    question: "元素記号Hｇの元素名は？",
    answers: ["ヘリウム", "銅", "水銀", "金"],
    correct: 2
  },
  {
    question: "関ヶ原の戦いは何年に起きた？",
    answers: ["1600年", "1653年", "1781年", "1890年"],
    correct: 0
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
  answerButtons.forEach(button => {
    button.classList.remove("correct");
    button.classList.remove("wrong");
  });

  resultElement.textContent = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
  });
}

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const correctIndex = questions[currentQuestionIndex].correct;

    answerButtons.forEach(btn => {
      btn.classList.remove("correct");
      btn.classList.remove("wrong");
    });

    if (index === correctIndex) {
      resultElement.textContent = "正解！";
      score++;
      scoreElement.textContent = score;
      button.classList.add("correct");
    } else {
      resultElement.textContent = "不正解...";
      button.classList.add("wrong");

      answerButtons[correctIndex].classList.add("correct");
      
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
