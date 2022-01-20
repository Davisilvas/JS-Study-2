/*
APRENDI UMA FORMA DE USAR A FUNÇÃO DENTRO DO OBJETO. SE ATENTAR QUE CASO FOR CHAMAR UMA PROPRIEDADE DO OBJETO, TEM QUE FAZER CERTO E NESSE CASO É "aluno.media(aluno.notas[0]...) SE NÃO FIZER ASSIM VAI DAR RUIM EM!!"
var aluno = { nome: "Davi", 
              idade: 20,
              notas: [9.0, 8.9],

              media: function(n1, n2){
                  if ((n1 + n2)/2 >= 7)
                    return "APROVADO"
                  else
                    return "REPROVADO"  
              }

            }
 console.log(aluno.media(aluno.notas[0], aluno.notas[1]));
*/

/*var calcMedia = function (n1, n2){
    return (n1 + n2) /2    
}*/
/*var aluno1 = { nome: "Maria", 
              idade: 23,
              notas: [9.0, 10.0],  
              media: function (){
                return (this.notas[0] + this.notas[1]) /2
              } 
}*/


function calcMedia (){
    return (this.notas[0] + this.notas[1]) /2
  } 

var aluno = { nome: "Davi", 
              idade: 20,
              notas: [8.0, 7.9],
              media: function (n1, n2){
                return (n1 + n2) /2 
              }           
}

var aluno1 = { nome: "Maria", 
              idade: 23,
              notas: [9.0, 10.0],  
              media: calcMedia
}


console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));


console.log(aluno1.nome);
console.log(aluno1.media());


