// script.js
const burgerMenu = document.querySelector('.burger-menu1');
const navLinks = document.querySelector('.nav-links1');
const cartIcon = document.querySelector('.cart');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

cartIcon.addEventListener('click', () => {
    // Add cart functionality here (e.g., open a cart modal)
});
