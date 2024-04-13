var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', calcularporcentaje);

function calcularporcentaje(){
    var precio = parseFloat(document.getElementById("precio").value);
    var descuento = parseFloat(document.getElementById("descuento").value);
    var resultado = (precio * descuento) / 100;
    var precioFinal = precio - resultado;
    document.getElementById("resultado").innerHTML = "El precio con descuento es: $" + precioFinal.toFixed(2);
}
