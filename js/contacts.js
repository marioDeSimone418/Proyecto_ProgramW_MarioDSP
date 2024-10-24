document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
  
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggleBtn.textContent = 'Día';
    } else {
      themeToggleBtn.textContent = 'Noche';
    }
  
    themeToggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
  
      if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Día';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.textContent = 'Noche';
        localStorage.setItem('theme', 'light');
      }
    });
  });
  
  function toggleMode() {
    const currentMode = localStorage.getItem('mode') || 'light'; 
    let newMode;
  
    if (currentMode === 'light') {
      newMode = 'dark';
    } else if (currentMode === 'dark') {
      newMode = 'colorblind';
    } else {
      newMode = 'light';
    }
  
    document.body.classList.remove('light-mode', 'dark-mode', 'colorblind-mode');
    if (newMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (newMode === 'colorblind') {
      document.body.classList.add('colorblind-mode');
    }
  
    localStorage.setItem('mode', newMode);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('mode') || 'light';
    document.body.classList.add(`${savedMode}-mode`);
  
    const toggleButton = document.getElementById('toggle-mode-btn');
    toggleButton.addEventListener('click', toggleMode);
  });
  