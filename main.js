const quote = document.getElementById("quote");
const person = document.getElementById("person");

const newQuoteBtn = document.getElementById("new-quote");
const speechBtn = document.getElementById("speech");
const copyBtn = document.getElementById("copy");
const twitterBtn = document.getElementById("twitter");

newQuoteBtn.addEventListener("click", () => {
  // Found an API that doesnt give me any CORS issues 😃
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
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

copyBtn.addEventListener("click", () => {
  // It is important to know that the Clipboard API is only supported for pages served over HTTPS.

  // You should check for browser permissions
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      console.log("Write access granted!");
    }
  });

  // To copy text with the new Clipboard API, you will use the asynchronous writeText() method
  navigator.clipboard
    .writeText(`${quote.textContent} By ${person.textContent}`)
    .then(
      () => {
        console.log("Content copied to clipboard");
      },
      () => {
        console.error("Failed to copy");
      }
    );
});

twitterBtn.addEventListener("click", () => {
  // use the url and pre populate the tweet with the quote and person
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.textContent} --- By ${person.textContent}`,
    "Tweet Window",
    "width=600, height=300"
  );
});
