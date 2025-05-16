document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuNav.classList.toggle('active');
});

