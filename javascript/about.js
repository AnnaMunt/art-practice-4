document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.error-button');
    const overlay = document.querySelector('.error-overlay');

    button.addEventListener('click', () => {
        overlay.classList.remove('hidden');
    });
});
