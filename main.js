const quote = document.getElementById("quote");
const person = document.getElementById("person");

const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  fetch("https://animechan.io/api/v1/quotes/random")
    .then((response) => response.json())
    .then((quote) => console.log(quote));
});
