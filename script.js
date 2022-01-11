/*
TENTATIVA SEM ASSISTIR A AULA DE FAZER UM CALCULADOR DE MÉDIA
var n1 = parseFloat(prompt("insira a primeira nota:"));
var m2 = parseFloat(prompt("insira a segunda nota"));
var m = n1 + n2 / 2;

if 
    m >= 7
    alert("parabéns você passou e sua média foi " + m)
else
    m < 7
    alert("infelizmente você tá de recuperação e sua média foi " + m)

PRIMEIRO ERRO: NÃO COLOQUEI A CONDIÇÃO EM ()   
SEGUNDO ERRO: NA SEGUNDA VARIÁVEL EU COLOQUEI M2 AO INVÉS DE N2 E COLOCQUEI N2 NO RESTO 
DO CÓDIGO TODINHO
TERCEIRO ERRO: NO CÁULCULO DA MÉDIA, POR CONTA DA ORDEM EM QUE APARECIA, O PROGRAMA TAVA 
DIVIDINDO N2 POR 2 E DEPOIS SOMANDO O RESULTADO A N1 SEM SER DIVIDIDO!!

======== VERSÃO CORRIGIDA ========
var n1 = parseFloat(prompt("insira a primeira nota:"));
var n2 = parseFloat(prompt("insira a segunda nota"));
var m = n1 + n2;
var mf = m / 2;

if (mf >= 7)
    alert("parabéns você passou e sua média foi " + mf)
else
    alert("infelizmente você tá de recuperação e sua média foi " + mf)
*/    

/* exemplo básico no meio da aula
var idade = parseInt(prompt("inisira a sua idade"));

if (idade >= 35){
    console.log("pode comprar bebida");
    console.log("qual é o seu pedido de hoje?");
    }
else if (idade >=18){    
    console.log("pode comprar bebida");
    console.log("mostre a indentidade");
    }
else{
    alert("não pode comprar bebida");   
    console.log("volte futuramente");
    }
*/    

var idade = parseInt(prompt("inisira a sua idade"));

if (idade >= 35){
    console.log("pode comprar bebida");
    console.log("qual é o seu pedido de hoje?");
    }
else if (idade >=18){    
    console.log("pode comprar bebida");
    console.log("mostre a indentidade");
    }
else{
    alert("não pode comprar bebida");   
    console.log("volte futuramente");
    }