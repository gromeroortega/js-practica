// Selecciona el email de la barra y el menu que debe mostrarse en la 
// versión desktop

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Selecciona el icono del menu en la versión mobile y el menue
// de la versión mobile
const mobileMenu = document.querySelector('.mobile-menu');
const mobileIconMenu = document.querySelector('.menu');

// Selecciona el icono de carrito y 
const navShoppingCar = document.querySelector('.navbar-shopping-cart');
const asideCar = document.querySelector('.product-detail-car');

//Card Container 

navEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);
navShoppingCar.addEventListener('click', toggleCarAside);

// Producto Deatails Selector
const asideProductDetails = document.querySelector('.product-detail');
const buttonProductDetailsClose = document.querySelector('.product-detail-close');
buttonProductDetailsClose.addEventListener('click', closeProductDetailAside);

// Abre y cierra el menu desktop
function toggleDesktopMenu(event) {
    const asideProductDetailsIsClose = asideProductDetails.classList.contains('inactive');
    const asideCarIsClose = asideCar.classList.contains('inactive');
    if (!asideCarIsClose||!asideProductDetailsIsClose) {
        asideCar.classList.add('inactive');
        closeProductDetailAside();
    }
    desktopMenu.classList.toggle('inactive');
    
}



// Abre y cierra el menu mobile y si el aside del carrito esta abierto lo cierra
// y después abre el menu mobile
function toggleMobileMenu(event) {
    const asideCarIsClose = asideCar.classList.contains('inactive');
    if (!asideCarIsClose) {
        asideCar.classList.add('inactive');  
    }
    mobileMenu.classList.toggle('inactive');
}
// Abre y cierra el aside del carrito y si el menu mobile esta abierto lo cierra
// y después abre el menu mobile
function toggleCarAside(event) {
    const mobileMenuIsClose = mobileMenu.classList.contains('inactive');
    const desktopMenuIsClose = desktopMenu.classList.contains('inactive');
    const asideProductDetailsIsClose = asideProductDetails.classList.contains('inactive');
    if (!mobileMenuIsClose) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenuIsClose) {
        desktopMenu.classList.add('inactive'); 
    }
    if (!asideProductDetailsIsClose) {
        asideProductDetails.classList.add('inactive'); 
    }
    asideCar.classList.toggle('inactive');
}

// Abre el aside del detalle del producto 
function openProductDetailAside(){
        desktopMenu.classList.add('inactive');
        asideCar.classList.add('inactive');
        asideProductDetails.classList.remove('inactive');
}

//Cerrar aside Product Details
function closeProductDetailAside(){
    asideProductDetails.classList.add('inactive');
}

const productsList = [];

productsList.push({
    name: 'Bike',
    price: '$120,00',
    urlimg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: 'Pantalla',
    price: '$120,00',
    urlimg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: 'Teclado',
    price: '$120,00',
    urlimg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: 'Iphone',
    price: '$120,00',
    urlimg: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(productList){
    const cardContainer = document.querySelector('.cards-container');
    for (const product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const cardimg = document.createElement('img');
        cardimg.setAttribute('src', product.urlimg);
        cardimg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productPriceDiv = document.createElement('div');
        
        const productPriceP = document.createElement('p');
        productPriceP.innerText = product.price;
        
        const productNameP = document.createElement('p');
        productNameP.innerText= product.name;
        productPriceDiv.append(productPriceP, productNameP);
        
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoFigureImg);
    
        productInfo.appendChild(productPriceDiv);
        productInfo.appendChild(productInfoFigure);
    
        
        productCard.appendChild(cardimg);
        productCard.appendChild(productInfo);
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productsList);

