# Simpsons Quote Generator: <a target="_blank" href="https://danielle-higgins.github.io/simpsons-quote-generator/">Visit Here</a>

<img src="https://github.com/Danielle-Higgins/simpsons-quote-generator/blob/main/img/simpson-preview.png">

Are you a fan of The Simpsons. Welcome to a The Simpsons Quote Generator where you can get random quotes from your favorite Simpsons characters.

## Tech Used

<p>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
</p>

I wanted to build a quote generator using an API and I found a Simpsons Quote API. The API has multiple URLs depending on what you want. I only wanted a single random quote each time the "New Quote" button is clicked on. So, I used the URL associated with that usage. When calls are made to the API, the API gies you can array of one or more objects which have four properties. I only used the quote and character properties. When the "New Quote" button is clicked on, I made an API call using the random quote URL and assigned the text of the quote and the person who said the quote to those two properties I'll be using, so when the button is clicked, a new quote will be generated. For the speech button, I used speechSynthesis so it reads the quote and the character who said it. For the copy button, I used the Clipboard API where I used the writeText method to copy text. Lastly, for the twitter button, I used the URL from the twitter developers website and have a new window open with the tweet pre populated with the quote and the character saying it, with a set width and height of the window.

Here is the API I used: <a target="_blank" href="https://thesimpsonsquoteapi.glitch.me/">The Simpsons Quote API</a>

## Optimizations

If/when I improve this project, I would like to use the image property from the Simpsons API where I can show an image of the character saying the quote. This would be helpful for people who don't watch The Simpsons.

## Lessons Learned:

I got more practice with APIs. I learned how to use the speechSynthesis object to make the browser say something. I learned how to use the Clipboard API to copy text. As well as how to open up a new window so the user can tweet something.
