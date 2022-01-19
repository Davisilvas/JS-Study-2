var aluno = { nome: "Davi", 
              idade: 20,
              notas: [9.0, 8.9]}

//COMO CHAMAR UMA PROPRIEDADE DO OBJETO console.log(aluno.idade);
//COMO CHAMAR O INDEX DE UM ARRAY NUM OBJETO console.log(aluno.notas[1]);
//OUTRA FORMA DE CHAMAR UMA PROPRIEDADE console.log(aluno["nome"]);
//SIMPLESMENTE CHAMANDO O OBJETO console.log(aluno);
//console.log(aluno["notas"][1]);

//aluno.matricula = 12344;
//aluno["sobrenome"] = "Santos";
//console.log(aluno.matricula);
//console.log(aluno.sobrenome);

var novaProp = "sobrenome"; 
aluno[novaProp] = "Santos";
console.log(aluno);

var jogo = new Object();

jogo["nome"] = "lol";
console.log(jogo);


























/*
FORMA DE USAR O ARRAY QUE EU NÃO TINHA PENSADO ANTES.
var fff = [8, 9];
var ddd = (fff[0] + fff[1])/2;
console.log(ddd);

*/