var nomes = ["Davi", "Maria", "Doly"];
var materias = ["Química", "Física", "Geometria"];
var notas1Q = [7.0, 8.0, 9.0];
var notas2Q = [5.0, 10.0, 10.0];
var notas1F = [9.0, 8.8, 10.0];
var notas2F = [7.0, 4.7, 7.2];
var notas1G = [8.5, 9.7, 7.1];
var notas2G = [8.1, 8.2, 5.5];

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

    var ntq1 = notas1Q[index];
    var ntq2 = notas2Q[index];
    var mq = media(ntq1, ntq2);

    var ntf1 = notas1F[index];
    var ntf2 = notas2F[index];
    var mf = media(ntf1, ntf2);

    var ntg1 = notas1G[index];
    var ntg2 = notas2G[index];
    var mg = media(ntg1, ntg2);

    //var subject = materias[index];

    console.log(nomes[index] + " - " + nota1 + 
    " - " + nota2 + " - " + m + " - " + passou(m));
}