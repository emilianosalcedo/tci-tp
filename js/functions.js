
var array = []
var obj = {}
var bool = false // 0 = false, 1 = true
var str = ''

// nombre
// argumentos
// bloque de codigo
// resultado

var calculadora = {
    resultado : 0,

    sumar(a = 0, b = 0) {
        this.resultado += a + b
    },

    restar(a = 0, b = 0) {
        this.resultado -= a - b
    },

    obtenerResultado() {
        return this.resultado
    },

    resetear() {

    }
}

calculadora.resultado = 567890
calculadora.restar(234)
calculadora.sumar(45)
calculadora.sumar(92)

console.log( calculadora.obtenerResultado() )








function nombreCompleto(primerNombre, segundoNombre, apellido) {
    var resultado = primerNombre

    if (segundoNombre != '') {
        resultado += ' ' + segundoNombre
    }
    
    return resultado += ' ' + apellido
}

// ejecutar
var resultadoSuma = calculadora.sumar(6, 8)
// calculadora.sumar()

var profesor = nombreCompleto('Alejandro', 'Ezequiel', 'Villafañe')
var usuario = nombreCompleto('Cosme', '', 'Fulanito')


// 1 base de datos / muchos datos (solo datos) / JSON
// 1 app / funciones

var users = []

// http://domain.com
// file:///Users/developer/cursos/it-master/it-master-desarrollo-web/index.html
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
    })

var user = {
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

for (var i = 0; i < users.length; i++) {
    users[i] = {...users[i], ...user}
}
