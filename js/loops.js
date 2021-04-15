//

// 0 : E
// 1 : m
// 2 : i

var nombre = [
    'Emiliano', // 0
    'Alejandro', // 1
    'Ezequiel', // 2
];

var mixto = [
    'soy un string',
    123,
    true,
    null,
    []
];


mixto.push('nuevo dato');

console.log(mixto.length);
console.log(mixto[5]);

// iteraciones
// desde - 0
// hasta - 9
// salto - 1

for (var i = 0; i < mixto.length; i++) {
    console.log(i);
    console.log(mixto[i]);
}

// 1 era - i = 0 - SI - ejecuta
// 2 da - i = 1 - SI - ejecuta
// ...
// 10 ma - i = 9 - NO

// array asociativo
var usuario = {
    primerNombre : 'Emiliano',
    segundoNombre : null,
    apellido : 'Salcedo',
    altura : 1.75,
    esExtranjero : false
};

// usuario.primerNombre

var link = '<a href="...">Home</a>';
var linksContainer = document.querySelector('.second-nav-links');

console.log(linksContainer);

/*
var links = [
    'Home',
    'Nosotros',
    'Productos',
    'Contacto'
];
*/

var links = [
    {
        href: '#home',
        name: 'Home'
    },
    {
        href: '#nosotros',
        name: 'Nosotros'
    },
    {
        href: '#productos',
        name: 'Productos'
    },
    {
        href: '#contacto',
        name: 'Contacto'
    }
];

for (var i = 0; i < links.length; i++) {
    linksContainer.innerHTML += generateLink(links[i]);
    //console.log(links[i]["name"])
    //console.log('<a href='#' + links[i].toLowerCase() + ''>' + links[i] + '</a>');
}

/*
var items = document.querySelectorAll('#items .item-product');

var productos = {
    src: 'http://placeimg.com/400/400/arch',
    alt: 'Logo Google',
    texto: 'Product category one product category one product category one product category one product category one',
};

for (i = 0; i < items.length; i++) {
    items[i].innerHTML += '<img src="' + productos.src + '" alt="' + productos.alt + '" />';
    items[i].innerHTML += '<p>' + productos.texto + '</p>';
}
*/

var items = document.querySelector('#items');

var productos = [
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },
    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    },    {
        imagen: 'http://placeimg.com/400/400/arch',
        texto: 'Product category one product category one product category one product category one product category one'
    }
];

for (var i = 0; i < productos.length; i++) {
    items.innerHTML += '<div class="item-product"><img src="' 
        + productos[i].imagen
        + '" alt="Logo Google" /><p>' 
        + productos[i].texto 
        + '</p></div>';
}

function generateLink(link) {
    return '<a href="#' + link.href + '">' + link.name + '</a>';
}
