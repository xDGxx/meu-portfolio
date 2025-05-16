document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o AOS
  AOS.init();

  // Seleciona os elementos do menu
  const menuToggle = document.getElementById('menu-toggle');
  const menuNav = document.getElementById('menu-nav');

  // Verifica se os elementos existem antes de adicionar o evento
  if (menuToggle && menuNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      menuNav.classList.toggle('active');
    });
  } else {
    console.error('Elementos menu-toggle ou menu-nav não encontrados.');
  }
});