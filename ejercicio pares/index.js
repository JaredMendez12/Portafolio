var btn = document.getElementById('btn1');
btn.addEventListener('click', () =>{
    var fin = parseInt(document.querySelector('#fin').value);
    var suma = 0;
    var resultado = '';
    for(var i=1; i<=fin; i++){
        if(i % 2 == 0){
            resultado += i + '<br>';
            suma += i;
        }
    }
    document.getElementById('resultado').innerHTML = resultado + ' La suma es: '+suma;
})
