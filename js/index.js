var cartelCookie = document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false
var botonVisualizar = document.getElementById('boton-visualizar')
var mainDisplay = document.getElementById('texto-principal')


if (mostrarMensaje) {
    cartelCookie.style.display = 'none'
}

botonVisualizar.addEventListener('click', function () {
    var opcion = document.getElementById('optionlist').value;
    if (opcion == "ORT") {
        mainDisplay.innerHTML = 'Mas de lo que estoy dispuesto a pagar, sobrio';
    }
    else {
        fetch('https://api-dolar-argentina.herokuapp.com/api/' + opcion).then(res => res.json()).then(data => {
            console.log(data);
            var compra = data.compra;
            var venta = data.venta;
            mainDisplay.innerHTML = 'Compra: ' + compra + ' AR$<br>Venta: ' + venta + ' AR$';
        });
    }

})

