//var numeros= ' ';
//for( var i=1; i <= 10; i++){
    //numeros += i+' ';
    //numeros = numeros + i+' ';
    /*
}
document.querySelector('#div1').innerHTML = numeros;


var btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    var ini= parseInt(document.querySelector('#ini').value);
    var fin= parseInt(document.querySelector('#fin').value);
    var losnumeros=' ';
    var suma= 0;
    var promedio= 0;
    var contador = 0;

    for(var i=ini; i<=fin ; i++){
        losnumeros += i+' ';
        suma +=i;
        contador ++;
    }
    promedio = suma/contador;
    document.querySelector('#div1').innerHTML =  losnumeros + 'la suma es '+suma+' El promedio es: ' +promedio;
})



function suma (n1, n2){
    return n1+n2;

}
const sumaf = (n1, n2) => {
    return n1+n2;
}
const sumaff = (n1, n2) => n1+n2;

console.log(sumaf(100000000000000,2));

const cuad = c => c*c;

fuction cuadrado(c){
    return
}*/
var btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    var num = parseInt(document.querySelector('#ini').value);
    var tabla = '';
    
    for(var i = 1; i <= 10; i++){
        tabla += num + ' x ' + i + ' = ' + num * i + '<br>';
    }
    
    document.querySelector('#div1').innerHTML = tabla;
})