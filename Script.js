// script.js
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carrossel-prev');
    const nextButton = document.querySelector('.carrossel-next');
    const container = document.querySelector('.carrossel-container');
    const slides = document.querySelectorAll('.carrossel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Inicializar o carrossel
    showSlide(currentIndex);
});
