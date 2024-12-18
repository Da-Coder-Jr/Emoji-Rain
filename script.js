// Hey Calder! 😂 Let's make it rain EMOJIS!!

// Choose your favorite emojis:
const emojis = ["😂", "😍", "✨", "💖", "🌈", "🤩", "😱", "🦄", "🔥", "😜", "🍀", "💫", "🌸", "⭐", "🤯"];

// Controls how often new emojis appear:
const spawnInterval = 300; // in milliseconds (0.3 seconds)
const emojiContainer = document.getElementById('emoji-container');

// Random helper functions
function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function randomXPosition() {
    return Math.floor(Math.random() * 100); // percent of viewport width
}

function spawnEmoji() {
    const emojiEl = document.createElement('div');
    emojiEl.className = 'emoji';
    emojiEl.textContent = randomEmoji();
    const x = randomXPosition();
    emojiEl.style.left = x + 'vw';
    emojiEl.style.top = '-100px'; // Start above the screen
    
    // Random delay before it falls faster/slower
    const duration = 5 + Math.random() * 5; // between 5 and 10 seconds
    emojiEl.style.animationDuration = duration + 's';
    
    emojiContainer.appendChild(emojiEl);

    // Remove emoji after animation ends to keep DOM clean
    setTimeout(() => {
        emojiContainer.removeChild(emojiEl);
    }, duration * 1000);
}

// Continuously spawn emojis
setInterval(spawnEmoji, spawnInterval);
