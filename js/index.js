var cartelCookie = document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false
var botonDolares = document.getElementById('boton-dolares')
var mainDisplay = document.getElementById('texto-principal')
if (mostrarMensaje) {
    cartelCookie.style.display = 'none'
}

botonDolares.addEventListener('click',function()
{
    fetch('https://api-dolar-argentina.herokuapp.com/api/dolaroficial').then(res=>res.json()).then(data=>{
        var compra = data.compra;
        var venta = data.venta;
        mainDisplay.innerHTML='Compra: '+compra+' AR$<br>Venta: '+venta+' AR$';
    });
})

