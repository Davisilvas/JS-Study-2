/*
EXEMPLO DE VARIÁVEL PASSANDO A REPRESENTAR A FUNÇÃO
function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var m = (nota1 + nota2) /2;

    return m;
}
var result1 = media(parseFloat(prompt("Insira a nota 1")), parseFloat(prompt("Insira a nota 2")));
console.log(result1);

var mediaFinal = media;
var result2 = mediaFinal(8, 7);
console.log(result2);
============================
*/


//var mf = (n1, n2) => {  ARROW FUNCTION
var mf = function(n1, n2){

    return (n1 + n2)/2
}
console.log(mf(8, 9));