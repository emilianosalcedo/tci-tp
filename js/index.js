// DATOS
// VARIABLES Y/O CONSTANTES
// TIPO DE DATO Y DATO

// TIPO DE DATO = undefined
var nombre;

// TIPO DE DATO string (CADENA DE CARACTERES)
var primerNombre = "Emiliano";
var apellido = "Salcedo";

// CONCATENAR
var nombreCompleto = primerNombre + " " + apellido;
var cantidadDeLetras = nombreCompleto.length;

// TIPO DE DATO number
var edad = 30;

var altura = 1.78;

console.log(edad);

// TIPO DE DATO boolean (false, true)
var esExtranjero = false;

var esMayorDeEdad = edad > 17;

console.log(nombreCompleto);

// LOGICA / CONDICIONALES

if (esExtranjero === true) {
    console.log("Bienvenido a nuestro pais");
}
else {
    console.log("Te redirigiremos a otra pagina...");
}

// EVENTOS
var cartelCookie = document.querySelector(".cookie");
var aceptar = document.querySelector(".cookie a");
var mostrarMensaje = true;

if (mostrarMensaje) {
    cartelCookie.style.display = "none";
}

aceptar.addEventListener("click", function () {
    //console.log("clickeaste sobre aceptar");
    cartelCookie.style.display = "none";
});

// ENVIO DE EMAIL
var botonDeEnviar = document.querySelector("#footer form button");

botonDeEnviar.addEventListener("click", function () {
    botonDeEnviar.parentElement.remove();
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Hemos recibido la suscripcion";
    document.querySelector("#footer").appendChild(parrafo);
});

console.log(botonDeEnviar);
