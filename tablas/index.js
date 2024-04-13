var btn = document.getElementById('btn1');
btn.addEventListener('click', () =>{
    var tabla = parseInt(document.querySelector('#tabla').value);
    var inicio = parseInt(document.querySelector('#ini').value);
    var fin = parseInt(document.querySelector('#fin').value);

    var resultado = '';
    for(var i=inicio; i<=fin; i++){
        resultado += tabla +' x '+i+' = '+(tabla*i)+ '<br>'
    }
    document.getElementById('div1').innerHTML = resultado;
})
