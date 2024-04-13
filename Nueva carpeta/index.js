var btn = document.getElementById('btnFac');
btn.addEventListener('click', ()=>{
    var numero = document.querySelector('#num').value;
    var factorial = 1;
    var texto = numero+'! = ';
    for( var i=1; i<=numero; i++){
        texto += i+ ' x ' ;
        factorial = factorial * i;
    }
    texto = texto.slice(0, texto.length - 2);
    texto += ' = ' + factorial;
    document.querySelector('#resultado').innerHTML = texto;
})
