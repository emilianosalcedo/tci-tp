var link = '<a href="#home">...</a>'

var linksContainer = document.querySelector('.second-nav-links')

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
    }
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
    }
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
        photo : "img/tr1.png",
        description : "Uno category one product category one product category one product category one product category one"
    },
    {
        photo : "img/tr2.png",
        description : "Dos category one product category one product category one product category one product category one"
    },
    {
        photo : "img/tr3.png",
        description : "Tres category one product category one product category one product category one product category one"
    },
    {
        photo : "img/tr4.png",
        description : "Cuatro category one product category one product category one product category one product category one"
    }
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
