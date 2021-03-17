const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const burgermenu = document.querySelector('.hamburger')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgermenu.classList.toggle('is-active');
})