const button = document.querySelector("#submit-answer");
let report = document.querySelector("#feedback");
function checkAnswer() {
  let correctAnswer = "4";
  const radio = document.querySelector("input[name]:checked");
  let userAnswer = radio.value;

  if (radio) {
    if (userAnswer == correctAnswer) {
      report.textContent = "Correct! Well Done.";
    } else {
      report.textContent = "That is incorrect. Try Again!";
    }
  }
}
button.addEventListener("click", checkAnswer);
