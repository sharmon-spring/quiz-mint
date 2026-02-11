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

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
