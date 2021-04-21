
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
        this.resultado = 0;
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

console.log(resultadoSuma)

console.log(profesor)
console.log(usuario)
