function loadProducts() {

  const productList = document.getElementById('product-list');
  let products = JSON.parse(localStorage.getItem('products')) || [];

  productList.innerHTML = '';

   products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <h3>${product.category}</h3>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Recompensa:  ₡${product.price}</p>
      <p>Se solicita(n): ${product.quantity}</p>
      ${product.quantity === '0' ? '<p class="sold-out">Esta donación ya no se requiere</p>' : ''}
      <button class="add-to-cart-btn" ${product.quantity === '0' ? 'disabled' : ''} data-index="${index}">Donar ahora</button>
    `;

    productList.appendChild(productCard);

  });

  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
      const productIndex = this.getAttribute('data-index');
      const selectedProduct = products[productIndex];
      agregarAlCarrito(selectedProduct);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('index.html')) {
    loadProducts();
  }
});

function updateNav() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const logoutLink = document.getElementById('logout-link');
  const historialLink = document.getElementById('historial-link');
  const welcomeMessage = document.getElementById('welcome-message');

  if (loggedInUser) {
    loginLink.style.display = 'none'; 
    registerLink.style.display = 'none'; 
    historialLink.style.display = 'inline'; 
    welcomeMessage.style.display = 'inline'; 
    welcomeMessage.textContent = `${loggedInUser}`; 
    logoutLink.style.display = 'inline'; 
  } else {
    loginLink.style.display = 'inline'; 
    registerLink.style.display = 'inline'; 
    welcomeMessage.style.display = 'none'; 
    logoutLink.style.display = 'none'; 
  }
}

function logoutUser() {
  localStorage.removeItem('loggedInUser');
  alert('Sesión cerrada con éxito');
  updateNav(); 
  window.location.href = '../index.html'; 
}


document.addEventListener('DOMContentLoaded', function() {
  updateNav(); 

  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', logoutUser);
  }
});

document.getElementById('hamburger-btn').addEventListener('click', function() {
  const navbar = document.getElementById('navbar');

  navbar.classList.toggle('active');

});

const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
  const offset = currentSlide * -100 / totalSlides;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

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
