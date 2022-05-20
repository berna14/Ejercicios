let messageQuestion = document.querySelector(".scoreQuestion");
let scoreAnswer = document.querySelector(".theScore");

messageQuestion.addEventListener("click", () => {
  let firstScore = +prompt("Insert first score");
  let secondScore = +prompt("Insert second score");
  let thirdScore = +prompt("Insert third score");
  let calculateScore = (firstScore + secondScore + thirdScore) / 3;

  scoreAnswer.textContent = "Your average score is " + calculateScore;
  cambiaColor();

  if (
    calculateScore === 0 ||
    calculateScore === null ||
    calculateScore === ""
  ) {
    scoreAnswer.textContent = "Insert a valid score.";
  }
});

function cambiaColor() {
  if (calculateScore >= 6) {
    calculateScore.style.color = "#FFB997";
  } else if (calculateScore < 6) {
    calculateScore.style.color = "#95C623";
  } else calculateScore.style.color = "#000000";
}
