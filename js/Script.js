const typingTexts = [
    "Game Developer",
    "Game Designer 2D & 3D",
    "Map"
];

const typedTextElement = document.getElementById("typed-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = typingTexts[textIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

document.getElementById("contact-button").addEventListener("click", function() {
    window.location.href = "https://discord.gg/XpWfunwB"; // Thay thế bằng link Discord thực tế
});
