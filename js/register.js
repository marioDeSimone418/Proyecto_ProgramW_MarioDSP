// Registro de usuarios
function registerUser(event) {
    event.preventDefault();
  
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    if (!username || !password) {
      alert('Por favor, ingrese un usuario y contraseña válidos');
      return;
    }
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = users.some(user => user.username === username);
  
    if (userExists) {
      alert('El nombre de usuario ya está en uso, por favor elija otro.');
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Usuario registrado exitosamente');
    document.getElementById('register-form').reset();
    window.location.href = 'login.html';
  }

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
  
    if (registerForm) {
      registerForm.addEventListener('submit', registerUser);
    }
  });
  
  document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); 
  });

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
        themeToggleBtn.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.textContent = 'Modo Oscuro';
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
  