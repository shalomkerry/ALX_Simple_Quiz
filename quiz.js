const button = document.getElementById("submit-answer");
let report = document.querySelector("#feedback");
function checkAnswer() {
  let correctAnswer = "4";
  const radio = document.querySelector("input[name='quiz']:checked");
  let userAnswer = radio.value;

  if (radio) {
    if (userAnswer === correctAnswer) {
      report.textContent = "Correct! Well done.";
    } else {
      report.textContent = "That's incorrect. Try again!";
    }
  }
}
button.addEventListener("click", checkAnswer);
