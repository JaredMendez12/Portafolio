var boton = document.getElementById('calcular');
boton.addEventListener('click', velocidad);

function velocidad(){
    var tiempo = parseFloat(document.getElementById("tiempo").value);
    var distancia = parseFloat(document.getElementById("distancia").value);
    var cal = distancia/tiempo;
    document.getElementById("resultado").innerHTML = "Tu velocidad es: " + cal + " kilometros por hora"; 
}
