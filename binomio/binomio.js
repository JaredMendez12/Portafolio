var boton = document.getElementById('calcular');
boton.addEventListener('click', calcularbinomio);

function calcularbinomio(){
    var B = parseFloat(document.getElementById('B').value);
    var A = parseFloat(document.getElementById('A').value);
    var resultado = (A*A)+(2*(A*B))+(B*B); // Aquí está el cambio
    document.getElementById("resultado").innerHTML = resultado;
}
