class quoteGenerator {
  constructor(quote, person, newQuote, speechBtn, copy, twitter) {
    this.quote = document.getElementById(quote);
    this.person = document.getElementById(person);
    this.newQuoteBtn = document.getElementById(newQuote);
    this.speechBtn = document.getElementById(speechBtn);
    this.copyBtn = document.getElementById(copy);
    this.twitterBtn = document.getElementById(twitter);

    this.setupEventListners();
  }

  setupEventListners() {
    this.newQuoteBtn.addEventListener("click", () => this.generateQuote());
    this.speechBtn.addEventListener("click", () => this.textToSpeech());
    this.copyBtn.addEventListener("click", () => this.copyToClipboard());
    this.twitterBtn.addEventListener("click", () => this.tweetToTwitter());
  }

  async generateQuote() {
    // Found an API that doesnt give me any CORS issues 😃
    try {
      const response = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );

      if (!response.ok) throw new Error("Network response was not ok!");

      const data = await response.json();
      // console.log(data);
      // console.log(data[0]);

      this.quote.textContent = data[0].quote;
      this.person.textContent = data[0].character;
    } catch (error) {
      console.log("Error:", error);
    }
  }

  textToSpeech() {
    const synth = window.speechSynthesis;

    const utterQuote = new SpeechSynthesisUtterance(this.quote.textContent);
    synth.speak(utterQuote);

    const utterPerson = new SpeechSynthesisUtterance(this.person.textContent);
    synth.speak(utterPerson);
  }

  // It is important to know that the Clipboard API is only supported for pages served over HTTPS.
  copyToClipboard() {
    // You should check for browser permissions
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        console.log("Write access granted!");
      }
    });

    // To copy text with the new Clipboard API, you will use the asynchronous writeText() method
    navigator.clipboard
      .writeText(`${this.quote.textContent} By ${this.person.textContent}`)
      .then(
        () => {
          console.log("Content copied to clipboard");
        },
        () => {
          console.error("Failed to copy");
        }
      );
  }

  tweetToTwitter() {
    // use the url and pre populate the tweet with the quote and person
    window.open(
      `https://twitter.com/intent/tweet?text=${this.quote.textContent} --- By ${this.person.textContent}`,
      "Tweet Window",
      "width=600, height=300"
    );
  }
}

const simpsons = new quoteGenerator(
  "quote",
  "person",
  "new-quote",
  "speech",
  "copy",
  "twitter"
);
