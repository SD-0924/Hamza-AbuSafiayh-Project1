document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.querySelector('.custom-button'); 
    
    darkModeButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  });