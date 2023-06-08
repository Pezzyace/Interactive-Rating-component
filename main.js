const ratingContainer = document.querySelector(".rating-container");
const messageContainer = document.querySelector(".message");
const submitButton = document.getElementById("submit-btn");
const rateAgain = document.getElementById("rate-again-btn");
const rating = document.getElementById("rating");
const rateBtn = document.querySelectorAll(".rate");

submitButton.addEventListener("click", () => {
  messageContainer.classList.remove("hidden")
  ratingContainer.style.display = "none";
})

rateAgain.addEventListener("click", () => {
  messageContainer.classList.add("hidden")
  ratingContainer.style.display = "flex";
})

rateBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.innerHTML = btn.innerHTML
  })
})

