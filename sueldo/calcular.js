var boton = document.getElementById('calcular');
boton.addEventListener('click', calculartar);

function calculartar(){
    var tarjetas = parseFloat(document.getElementById("tarjetas").value);
    var costo = parseFloat(document.getElementById("costo").value);
    if (tarjetas < 15) {
        resultado = costo * tarjetas;
  
    } else {    
 var resultado = (costo*tarjetas)*(0.90);

    }
    document.getElementById("resultado").innerHTML = "el monto total es: " + resultado;
}
