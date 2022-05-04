const arrow = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".div-answer");
const question = document.querySelectorAll(".div-question");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    question[i].classList.toggle("questionActive");
    answer[i].classList.toggle("div-answer");
    arrow[i].classList.toggle("arrowActive");
  });
}
