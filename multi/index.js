var btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    var num = parseInt(document.querySelector('#ini').value);
    var tabla = '';
    
    for(var i = 1; i <= 10; i++){
        tabla += num + ' x ' + i + ' = ' + num * i + '<br>';
    }
    
    document.querySelector('#div1').innerHTML = tabla;
})
