var btn = document.getElementById('btnfib');
btn.addEventListener('click', () => {
    var numero = document.querySelector('#num').value;
    var suma = 1;
    var suma2 = 0;
    var texto = '0,';
    for (var i = 1; i <= numero; i++) {
        
        var suma3 = suma;
        suma += suma2;
        suma2 += suma;
        suma2 = suma3;
        texto += suma2 + ',' ;
    }
    texto = texto.slice(0, texto.length - 1);
    document.querySelector('#resultado').innerHTML = texto;
});
