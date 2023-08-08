// Menu Interfaz Desktop
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Menu en Interfaz Mobile
const burgerMenu = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu')

// Carrito De Compras
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

// Event Listeners
navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartMenu);

// Event Functions
function toggleDesktopMenu(){
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCartMenu(){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}