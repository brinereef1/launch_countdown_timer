const startNumber = 40;
const flipCard = document.querySelector('.flip-card');

[...flipCard.children].forEach(child => {
    child.textContent = startNumber;
});

flipCard.classList.add('flip')