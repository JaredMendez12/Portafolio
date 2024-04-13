var boton =  document.getElementById('cm');
var dia = document.getElementById('dia');
var div = document.querySelector('#Resultado');

dia.addEventListener('change', function(){
    var fecha = parseFloat(document.getElementById("fecha").value);
    if(fecha % 2 === 0){
        
        div.style.background = '#FF0000';
        div.style.color = '#FFFFFF'; 
    }
    else {
        
        div.style.background = '#FFFFFF';
        div.style.border = '2px dotted #008000';
    }
});

boton.addEventListener('click', hola);

function hola(){
    var fecha = parseFloat(document.getElementById("fecha").value);

    div.innerHTML = 'Fecha: ' + fecha;
}
