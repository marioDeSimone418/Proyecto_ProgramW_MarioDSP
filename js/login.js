 //Inicio de sesión con verificación de administrador
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (username === 'admin' && password === '1234') {
    alert('Bienvenido, administrador');
    console.log("Administrador logueado");
    localStorage.setItem('loggedInUser', 'admin');
    window.location.href = 'admin.html'; 
    return;
  }


  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert(`Bienvenido, ${user.username}`);
    localStorage.setItem('loggedInUser', username); 
    window.location.href = '/index.html'; 
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', loginUser);
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
  
    // Actualizar clase en el body
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
  