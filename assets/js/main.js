// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  const body = document.body;

  // Verifica a preferência salva ou o sistema
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-theme');
  }

  // Evento de clique no botão
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  } else {
    console.error('Toggle button not found!');
  }
});