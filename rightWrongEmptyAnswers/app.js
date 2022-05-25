let messageAnswers = document.querySelector(".askAnswers");
let seeAnswers = document.querySelector(".showAnswers");

messageAnswers.addEventListener("click", () => {
  let rightAnswers = +prompt("Insert number of right answers");
  let wrongAnswers = +prompt("Insert number of wrong answers");
  let emptyAnswers = +prompt("Insert number of empty answers");

  let calculateScore = rightAnswers * 5 + wrongAnswers * 0 + emptyAnswers * -1;

  seeAnswers.textContent = "Final score = " + calculateScore;

  if (calculateScore === "" || calculateScore === null) {
    seeAnswers.textContent = "Not valid arguments.";
  }
});
