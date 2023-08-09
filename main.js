// Menu Interfaz Desktop
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Menu en Interfaz Mobile
const burgerMenu = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu')

// Carrito De Compras
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

// Lista de Productos
const cardsContainer = document.querySelector('.cards-container')

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

/* a list of the avaliable products is 
updated with some of the different products
via the backend */
const productList = [];
productList.push({
    name: 'Bike',
    price: 118.99,
    imageURL: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Monitor',
    price: 179.49,
    imageURL: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Laptop',
    price: 1199.99,
    imageURL: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImage = document.createElement('img');
    productImage.setAttribute('src',product.imageURL);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const addToCartFigure = document.createElement('figure');
    const addToCartIcon = document.createElement('img');
    addToCartIcon.setAttribute('src',"./icons/bt_add_to_cart.svg")

    // All Father-Child relationships are configured
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(addToCartFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    addToCartFigure.appendChild(addToCartIcon);

    cardsContainer.appendChild(productCard);
}