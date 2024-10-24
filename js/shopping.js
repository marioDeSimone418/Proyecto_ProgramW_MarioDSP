function mostrarComprasRealizadas() {
    const comprasList = document.getElementById('compras-list');
    let comprasRealizadas = JSON.parse(localStorage.getItem('comprasRealizadas')) || [];
    const usuarioActual = localStorage.getItem('loggedInUser'); 
  
    if (comprasRealizadas.length === 0) {
      comprasList.innerHTML = '<p>Coloca tus donaciones a nuestra causa aquí ❤️</p>';
      return;
    }
  

    comprasList.innerHTML = '';
  
    comprasFiltradas = comprasRealizadas.filter(compra => compra.usuario === usuarioActual);
  

    comprasFiltradas.forEach(compra => {
      const compraDiv = document.createElement('div');
      compraDiv.classList.add('compra');
  

      let productosHTML = '<ul>';
      compra.productos.forEach(item => {
        productosHTML += `<li>${item.name} - $${item.price} - Cantidad: ${item.quantity}</li>`;
      });
      productosHTML += '</ul>';
  
      compraDiv.innerHTML = `
      <h3>Compra realizada por ${compra.usuario} el ${compra.fecha}</h3>
      ${productosHTML}
      <p>Total: $${compra.total}</p>
      `;
      comprasList.appendChild(compraDiv);
      });
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        const comprasList = document.getElementById('compras-list');
        if (comprasList) {
          mostrarComprasRealizadas();
        }
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
    
      // Evento de clic en el botón para alternar el tema
      themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    
        if (document.body.classList.contains('dark-mode')) {
          themeToggleBtn.textContent = 'Día';
          localStorage.setItem('theme', 'light');
        } else {
          themeToggleBtn.textContent = 'Noche';
          localStorage.setItem('theme', 'dark');
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
    
    // Cargar el modo guardado cuando se cargue la página
    document.addEventListener('DOMContentLoaded', function() {
      const savedMode = localStorage.getItem('mode') || 'light';
      document.body.classList.add(`${savedMode}-mode`);
    
      // Evento para el botón de cambiar modo
      const toggleButton = document.getElementById('toggle-mode-btn');
      toggleButton.addEventListener('click', toggleMode);
    });
    
    
  