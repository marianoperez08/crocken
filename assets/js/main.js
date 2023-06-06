// Elementos DOM
const iconCart = document.querySelector(".cart-icon")
const iconMenu = document.querySelector(".icon-menu")
const iconCloseMenu = document.querySelector(".icon-close-menu")
const iconCloseCart = document.querySelector(".icon-close-cart")
const cart = document.querySelector(".cart")
const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".navbar-responsive")
const overlay = document.querySelector(".overlay")
const productsContainer = document.querySelector("#products-container")
const boxes = document.querySelectorAll(".box")

const animationBoxes = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si el elemento es visible
    if (entry.isIntersecting) {
        // Agrega una clase para animar el elemento
        entry.target.classList.add('animate-boxes');
    } else {
        // Si el elemento ya no es visible, remueve la clase de animación
        entry.target.classList.remove('animate-boxes');
    }
    });
});


// Scroll
const scroll = () => {
    let scrollPos = window.scrollY
    if (scrollPos > 39) {
        
    }
    else {
        
    }
}

const renderProducts = () => {
    products.forEach((prod) => {
        const {id, name, description, price, img, cant, title} = prod 
        productsContainer.innerHTML += 
        `
        <li class="splide__slide">
            <div class="product">
                <div class="product-img">
                    <img src="./assets/img/products/${img}" alt="" srcset="">
                    <p>${description}</p>
                </div>
                <div class="product-info">
                    <div class="product-title" >
                        <span class="new">¡${title}!</span>
                        <h3 class="title">${name}</h3>
                    </div>
                    <div class="product-description">
                        <span class="product-price">$${price}</span>
                        <a href="" class="btn btn-orange product-add">
                            añadir
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </div>
                </div>
                
                
            </div>
        </li>
        `
    })
    
}

const toggleCart = () => {
	cart.classList.toggle("open-cart");
	overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
	menu.classList.toggle("open-menu");
	overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
	cart.classList.remove("open-cart");
    menu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
    cart.classList.remove("open-cart");
    menu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

// Función para verificar el tamaño de la pantalla y realizar acciones correspondientes
const verificarTamañoPantalla = () => {
    var anchoPantalla = window.innerWidth;
    if (anchoPantalla < 768) {
        // Acciones para dispositivos móviles

    } else {
        // Acciones para escritorio
        closeOnOverlayClick()
    }
}



const init = () => {
    // Load
    window.addEventListener('load', verificarTamañoPantalla);
    // Resixe
    window.addEventListener('resize', verificarTamañoPantalla);
    // Scroll
    window.addEventListener('scroll', scroll);
    // Click
    iconCart.addEventListener('click', toggleCart)
    iconMenu.addEventListener('click', toggleMenu)
    // window.addEventListener("scroll", closeOnScroll);
    overlay.addEventListener('click', closeOnOverlayClick)
    iconCloseCart.addEventListener("click", closeOnOverlayClick)
    iconCloseMenu.addEventListener("click", closeOnOverlayClick)
    //ForEachs
    boxes.forEach((box) => animationBoxes.observe(box))
    // Functions
    renderProducts()
}

init()

// SPLIDE JS
const splideProducts = new Splide( '.splide-products', {
    perPage: '4',
    type: "loop",
    gap: "40px",
    perMove: '1',
    pagination: false,
    breakpoints: {
        1300: {
            perPage: 3,
        },
        1000: {
            perPage: 2,
        },
        700: {
            perPage: 1,
        }
    },
});
splideProducts.mount()