// Función para agregar productos
function addProduct(event) {
    event.preventDefault();
  
    const category = document.getElementById('product-category').value;
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const quantity = document.getElementById('product-quantity').value;
    const imageFile = document.getElementById('product-image').files[0];
  

    if (!category || !name || !price || !description || !quantity || !imageFile) {
      alert('Por favor, ingrese todos los campos');
      return;
    }
  

    const reader = new FileReader();
    reader.onload = function(event) {
      const imageDataUrl = event.target.result;

      let products = JSON.parse(localStorage.getItem('products')) || [];

const newProduct = {
    category,
    name,
    price,
    description,
    quantity,
    image: imageDataUrl,
  };
  

  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  
  alert('Solicitud agregada exitosamente');
  document.getElementById('add-product-form').reset(); 
  };
  reader.readAsDataURL(imageFile); 
  }

document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
      addProductForm.addEventListener('submit', addProduct);
    }
  });
  

  function checkAdminAccess() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser || loggedInUser !== 'admin') {
      alert('Acceso denegado. Solo el administrador puede acceder a esta página.');
      window.location.href = 'index.html';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/html/admin.html')) {
      checkAdminAccess();
    }
  });

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

  
    let products = JSON.parse(localStorage.getItem('products'));
    if (products.length === 0) {
      productList.innerHTML = '<p>No hay solicitudes abiertas</p>';
      return;
    }
  
    products.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
  
      productDiv.innerHTML = `
        <h2>${product.category}</h2>
        <h3>${product.name}</h3>
        <p>Recompensa: ${product.price}</p>
        <p>Descripción: ${product.description}</p>
        <p>Se solicita(n): ${product.quantity}</p>
        <img src="${product.image}" alt="${product.name}" style="max-width: 100px;">
        <button onclick="editProduct(${index})">Editar</button>
        <button onclick="deleteProduct(${index})">Eliminar</button>
      `;
      productList.appendChild(productDiv);
});
}

document.addEventListener('DOMContentLoaded', function() {
  displayProducts();
});


function deleteProduct (index) {
  let products = JSON.parse(localStorage.getItem('products')) || [];

  products.splice(index, 1);

  localStorage.setItem('products', JSON.stringify(products));

  displayProducts();
  alert('Solicitud eliminada correctamente.');
}

function editProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
  

    const product = products[index];
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-quantity').value = product.quantity;

    const form = document.getElementById('add-product-form');
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.textContent = 'Actualizar Solicitud';
  
    form.removeEventListener('submit', addProduct);
  
    form.addEventListener('submit', function updateProduct(event) {
      event.preventDefault();
  
      const updatedProduct = {
        category: document.getElementById('product-category').value,
        name: document.getElementById('product-name').value,
        price: document.getElementById('product-price').value,
        price: document.getElementById('product-price').value,
        description: document.getElementById('product-description').value,
        quantity: document.getElementById('product-quantity').value,  
        image: product.image 
};

products[index] = updatedProduct;
localStorage.setItem('products', JSON.stringify(products));

alert('Producto actualizado correctamente.');
submitButton.textContent = 'Agregar Producto';

form.reset();


form.removeEventListener('submit', updateProduct);
form.addEventListener('submit', addProduct);

displayProducts(); 
});
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    let products = JSON.parse(localStorage.getItem('products')) || [];
  
    if (products.length === 0) {
      productList.innerHTML = '<p>No hay solicitudes disponibles.</p>';
      return;
    }
  
    products.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
        <h2>${product.category}</h2>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Recompensa: $${product.price}</p>
        <p>Se solicita(n): ${product.quantity}</p>
        <p>${product.description}</p>
        <button onclick="editProduct(${index})">Editar</button>
        <button onclick="deleteProduct(${index})">Eliminar</button>
      `;
      productList.appendChild(productDiv); 
    });
  }

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
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
      themeToggleBtn.textContent = 'Modo Claro';
    } else {
      themeToggleBtn.textContent = 'Modo Oscuro';
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
  
  