var nomes = ["Davi", "Maria", "Doly"];
var notasA = [7.0, 8.0, 9.0];
var notasB = [5.0, 10.0, 10.0];

function media (n1, n2){
    return(n1 + n2)/2
}

function passou (media){
    if (media >= 7)
        return "APROVADO";
    else 
        return "REPROVADO";
}

for(var index in nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] + " - " + nota1 + 
    " - " + nota2 + " - " + m + " - " + passou(m));
}