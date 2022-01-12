function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var m = (nota1 + nota2) /2;
    //console.log (m);
    return m;
}

// media(9, 8.5); também serveria para passar os valores
var result1 = media(parseFloat(prompt("Insira a nota 1")), parseFloat(prompt("Insira a nota 2")));
console.log(result1);