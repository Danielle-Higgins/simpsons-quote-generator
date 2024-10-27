const quote = document.getElementById("quote");
const person = document.getElementById("person");

const newQuoteBtn = document.getElementById("new-quote");
const speechBtn = document.getElementById("speech");

newQuoteBtn.addEventListener("click", () => {
  // Found an API that doesnt give me any CORS issues 😃
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data[0]);

      quote.textContent = data[0].quote;
      person.textContent = data[0].character;
    })
    .catch((error) => console.log(`${error}`));
});

speechBtn.addEventListener("click", () => {
  const synth = window.speechSynthesis;

  const utterQuote = new SpeechSynthesisUtterance(quote.textContent);
  synth.speak(utterQuote);

  const utterPerson = new SpeechSynthesisUtterance(person.textContent);
  synth.speak(utterPerson);
});
