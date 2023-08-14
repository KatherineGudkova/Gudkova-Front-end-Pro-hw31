document.addEventListener('DOMContentLoaded', function() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['😻', '🍔', '🔥', '🐣', '💩'];

    const emojiCounts = {};

    emojis.forEach(emoji => {
        const emojiBox = document.createElement('div');
        emojiBox.classList.add('emoji-box');
        
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;

        const countElement = document.createElement('span');
        countElement.classList.add('emoji-count');
        countElement.textContent = '0';

        emojiBox.appendChild(emojiElement);
        emojiBox.appendChild(countElement);

        emojiContainer.appendChild(emojiBox);

        emojiCounts[emoji] = countElement;

        emojiElement.addEventListener('click', function() {
            const currentCount = parseInt(countElement.textContent);
            countElement.textContent = (currentCount + 1).toString();
        });
    });
});
