const changeQuoteBtn = document.getElementById('changeQuoteBtn');
const highlightQuoteBtn = document.getElementById('highlightQuoteBtn');
const addQuoteBtn = document.getElementById('addQuoteBtn');
const removeQuoteBtn = document.getElementById('removeQuoteBtn');
const mainQuote = document.getElementById('mainQuote');
const quoteInput = document.getElementById('quoteInput');
const userQuotes = document.getElementById('userQuotes');

const quotes = [
  '"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill',
  '"Act as if what you do makes a difference. It does." — William James',
  '"What you get by achieving your goals is not as important as what you become by achieving your goals." — Zig Ziglar',
  '"Push yourself, because no one else is going to do it for you." — Unknown',
  '"You are braver than you believe, stronger than you seem, and smarter than you think." — A.A. Milne'
];
let currentIndex = 0;

// Change the main quote
changeQuoteBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  mainQuote.textContent = quotes[currentIndex];
});

// Toggle highlight on main quote
highlightQuoteBtn.addEventListener('click', () => {
  mainQuote.classList.toggle('highlight');
});

// Add a user’s quote
addQuoteBtn.addEventListener('click', () => {
  const userText = quoteInput.value.trim();
  if (userText) {
    const newQuote = document.createElement('div');
    newQuote.classList.add('quote-box');
    newQuote.textContent = userText;
    userQuotes.appendChild(newQuote);
    quoteInput.value = '';
  }
});

// Remove the last added quote
removeQuoteBtn.addEventListener('click', () => {
  const lastQuote = userQuotes.lastElementChild;
  if (lastQuote) {
    userQuotes.removeChild(lastQuote);
  }
});
