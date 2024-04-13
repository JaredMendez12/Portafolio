var boton =  document.getElementById('Calcular');
boton.addEventListener('click', calcularpago);

function calcularpago(){
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var sueldo = parseFloat(document.getElementById("sueldo").value);
    if (cantidad < 5650) {
        res = sueldo * 0.25;
        resultado = res + sueldo;
    } else {
        resultado = (cantidad * 0.3)+sueldo;

    }
document.getElementById("resultado").innerHTML = "El sueldo que obtuvo fue :" + resultado;
}


