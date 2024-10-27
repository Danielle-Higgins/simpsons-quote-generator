const quote = document.getElementById("quote");
const person = document.getElementById("person");

const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(`${error}`));
});
