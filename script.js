/* 
EXEMPLO MAIS SIMPLES DO USO DE FOR!!!!!!
var numero = 5;

for(var vez = 0; vez<numero; vez++){
    console.log("executando");
}
console.log("Acabou");
*/ 
/*
var numero = parseInt(prompt("Insira um número para a repetição acontecer"));

//for(var vez = 1; vez<=numero; vez++){ Dessa forma teria a contagem de 1 até 5 certinha.
for(var vez = 0; vez<numero; vez++){

    console.log("executando o for pela " + vez + " vez");
}
console.log("Acabou");
=========================================
*/

/*EXEMPLO SIMPLES DO USO DE WHILE
var numero = 5;

while(numero < 10){
    console.log("executando pela " + numero + " vez");
    numero++;

}
console.log("acabou");
=========================================
*/

/* EXEMPLO COM NÚMERO ALEATÓRIO
var n = Math.random() * 100;

while(n<=90){
    console.log(n);
    n = Math.random() * 100;
}

console.log(n + " opa, passou de 90!");
console.log("acabou")
=========================================
*/


//EXEMPLO DO USO DE WHILE PRA VER OS MÚLTIPLOS!!
var numero = 0;

while(numero <= 100){
    if( numero % 3 === 0 && numero % 5 ===0){
        console.log (numero + " é múltiplo de 3 e 5");
    } 
    else if(numero % 5 ===0){
        console.log(numero + " este número é múltiplo somente de 5");
    }
    else if(numero % 3 ===0){
        console.log(numero + " este número é múltiplo somente de 3");
    }
    else{
        console.log(numero + " este número não é múltiplo nem de 3 e nem de 5");
    }
    numero++;
}
