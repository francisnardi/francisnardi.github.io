// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    const body = document.body;
  
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-theme');
    }
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });