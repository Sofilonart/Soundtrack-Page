// Smooth scroll effect
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// quotes.js

const songQuotes = [
  { text: "It's okay not to be okay.", song: "Jessie J - Who You Are" },
  { text: "I will try to fix you.", song: "Coldplay - Fix You" },
  { text: "I hope you never lose your sense of wonder.", song: "Lee Ann Womack - I Hope You Dance" },
  { text: "You are not alone, I am here with you.", song: "Michael Jackson - You Are Not Alone" },
  { text: "Even the best fall down sometimes.", song: "Howie Day - Collide" },
  { text: "And I know we’ll be alright this time.", song: "Ed Sheeran - Thinking Out Loud" },
  { text: "We might be hollow, but we’re brave.", song: "Lorde - Team" },
  { text: "I still have me, even if I don't have you.", song: "Demi Lovato - I Love Me" },
  { text: "You just call out my name, and you know wherever I am, I'll come running.", song: "Carole King - You've Got a Friend" },
  { text: "And in my hour of darkness, she is standing right in front of me.", song: "The Beatles - Let It Be" }
];

// Function to get random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * songQuotes.length);
  const quoteObj = songQuotes[randomIndex];
  return `"${quoteObj.text}" — ${quoteObj.song}`;
}

// Display the first quote on load
document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("song-quote");
  const button = document.getElementById("new-quote");

  function updateQuote() {
    quoteElement.textContent = getRandomQuote();
  }

  // Initial quote
  updateQuote();

  // New quote on button click
  button.addEventListener("click", updateQuote);
});
