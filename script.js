// && e
// || ou
// ! negação 

/*
    EXEMPLO BÁSICO DE &&
var a = true;
var b = false;
var c = a&&b;
console.log(c); RESULTADO FALSE!

    EXEMPLO BÁSICO DE ||
var a = true;
var b = false;
var c = a||b;
console.log(c); RESULTADO TRUE!

    EXEMPLO BÁSICO DE ! NEGAÇÃO
var a = true;
var b = !false;
var c = a||b;
console.log(c); RESULTADO TRUE!
*/

/*
=============EXEMPLO COM O &&=============
var idade = 20;
var min = idade >= 20;
var max = idade <=30;
var pode = min && max;

console.log("idade", idade)
console.log("maior que 20?", min)
console.log("menor que 30?", max)
console.log("pode?", pode) 
*/


/*
=============EXEMPLO COM ||=============
var idade = 69;
var menor10 = idade <= 10;
var maior65 = idade >= 65;
var grat = menor10 || maior65;

console.log("idade", idade);
console.log("é menor que 10 anos?", menor10);
console.log("é maior que 65 anos?", maior65);
console.log("tem direito a gratuidade?", grat);
*/


/*
=============EXEMPLO COM NEGAÇÃO !=============
var idade = 10;
var maior = idade >= 20;
var menor = !maior;
 
console.log ("maior que 20?", maior);
console.log ("menor que 20?", menor);
*/