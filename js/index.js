var cartelCookie = document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false
var botonVisualizar = document.getElementById('boton-visualizar')
var mainDisplay = document.getElementById('texto-principal')

if (mostrarMensaje) {
  cartelCookie.style.display = 'none';
}

botonVisualizar.addEventListener('click', function () {
  var opcion = document.getElementById('optionlist').value;
  var cors = 'https://cors-solucion.herokuapp.com/';
  var url = 'https://api-dolar-argentina.herokuapp.com/api/';
  var opts = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Accept': '*'
      }
    };

  if (opcion == "ORT") {
    mainDisplay.innerHTML = 'Mas de lo que estoy dispuesto a pagar, sobrio';
  }
  else {
    fetch(cors + url + opcion, opts).then((res) => { return res.json() }).then((data) => {
      console.log(data);
      var compra = data.compra;
      var venta = data.venta;
      mainDisplay.innerHTML = 'Compra: ' + compra + ' AR$<br>Venta: ' + venta + ' AR$';
    }).catch(err => console.log('Request Failed', err));
  }
})

//var usuario = nombreCompleto('Cosme', '', 'Fulanito');
var users = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
    })

var user = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

for (var i = 0; i < users.length; i++) {
    users[i] = {...users[i], ...user};
}

var link = '<a href="#home">...</a>';

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
];

function generateLink(link) {
    return '<a href="' + link.href + '">' + link.name + '</a>';
}

var itemsContainer = document.querySelector('#items');

var products = [
    {
        photo : "img/chorro.jpeg",
        description : "VPN"
    },
    {
        photo : "img/viaja.jpeg",
        description : "¡Viaja!"
    },
    {
        photo : "img/jobs.jpeg",
        description : "Trabajos"
    }
];

var paginacion = document.querySelector('.paginacion');
var cantidadDeResultados = 3;

function mostrarItems(q) {
    for (var i = 0; i < q; i++) {
        itemsContainer.innerHTML += `
            <div class="item-product">
                <img src="${products[i].photo}" alt="Banner" />
                <p>${products[i].description}</p>
            </div>
        `;
    }
}

paginacion.addEventListener('click', function () {
    cantidadDeResultados = 3;
    mostrarItems(cantidadDeResultados);
})

mostrarItems(cantidadDeResultados);
