var boton = document.getElementById('calcular');
boton.addEventListener('click', calcularpromedio);

function calcularpromedio(){
    var parcial1 = parseFloat(document.getElementById("parcial1").value);
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);

    var ordinario = parseFloat(document.getElementById("ordinario").value);
    var sumaparcial = (parcial1 + parcial2 + parcial3)/3;
    var sumaf = (sumaparcial + ordinario)/2;
    document.getElementById("promedioF").innerHTML = "Tu calificacion final es: " + sumaf;
}