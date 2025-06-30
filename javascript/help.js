document.addEventListener("DOMContentLoaded", () => {
    const helpButton = document.querySelector('.help-button');
    const rekvImage = document.querySelector('.rekv');
  
    helpButton.addEventListener('click', () => {
      helpButton.classList.add('hidden');
      rekvImage.classList.remove('hidden');
    });
  });
  