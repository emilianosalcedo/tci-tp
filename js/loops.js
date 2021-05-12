// array, arreglo, matriz, lista, vector

// 0 : A
// 1 : l
// 2 : e

var nombre = [
    'Alejandro',  // 0
    'Ezequiel',   // 1
    'Villafane',  // 2
]

var mixto = [
    'soy un string',
    123,
    true,
    null,
    []
]

mixto.push('nuevo dato')

for (var i = 0; i < mixto.length; i++) {
    console.log( mixto[i] )
}

// 1 era - i = 0 - SI - ejecuta
// 2 da -  i = 1 - SI - ejecuta
// ...
// 10ma - i = 9 - NO

// array asociativo
var usuario = {
    primerNombre : 'Alejandro',
    segundoNombre : 'Ezequiel',
    apellido : 'Villafane',
    altura : 1.78,
    esExtranjero : false,
}

var link = '<a href="#home">...</a>'

var linksContainer = document.querySelector('.second-nav-links')

// var links = [
//     'Home',
//     'Nosotros',
//     'Productos',
//     'Contacto',
// ]

var contacts = [
    {
        "photo_url" : "...",
        "name" : "Cosme Fulanito",
        "last_connection" : "2021-04-19 18:59:34",
        "last_message" : {
            "text" : "ahgjdahgsdj",
            "date" : "2021-04-19 18:59:34",
            "read" : true
        }
    },
    {
        "photo_url" : "...",
        "name" : "Cosme Fulanito",
        "last_connection" : "2021-04-19 18:59:34",
        "last_message" : null
    },
    {
        "photo_url" : "...",
        "name" : "Cosme Fulanito",
        "last_connection" : "2021-04-19 18:59:34",
        "last_message" : null
    },
]

var links = [
    {
        href : '#home',
        name : 'Home',
        children : []
    },
    {
        href : '#productos',
        name : 'Productos',
        children : [
            {
                href : "sublink uno",
                name : "sublink uno"
            },
            {
                href : "sublink dos",
                name : "sublink dos"
            },
        ]
    },
    {
        href : '#nosotros',
        name : 'Nosotros',
        children : []
    },
    {
        href : '#contacto',
        name : 'Contacto',
        children : []
    },
]

for (var i = 0; i < links.length; i++) {
    linksContainer.innerHTML += generateLink(links[i])
}

function generateLink(link) {
    return '<a href="' + link.href + '">' + link.name + '</a>'
}

var itemsContainer = document.querySelector('#items')

var products = [
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Uno category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Dos category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Tres category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Cuatro category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
    {
        photo : "https://placeimg.com/400/400/arch",
        description : "Product category one product category one product category one product category one product category one"
    },
]

var paginacion = document.querySelector('.paginacion')

var cantidadDeResultados = 4

function mostrarItems(q) {
    for (var i = 0; i < q; i++) {
        itemsContainer.innerHTML += `
            <div class="item-product">
                <img src="${products[i].photo}" alt="Logo Google" />
                <p>${products[i].description}</p>
            </div>
        `
    }
}

paginacion.addEventListener('click', function () {
    cantidadDeResultados = 8
    mostrarItems(cantidadDeResultados)
})

mostrarItems(cantidadDeResultados)
