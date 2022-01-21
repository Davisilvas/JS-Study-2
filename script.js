/*ARRAY COM VÁRIAS CHAVES DENTRO
var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2;
}

var turma = [
            {
                nome: "Davi",
                nota1: 7.5,
                nota2: 8.8,
                media: calcMedia
            }
]

var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());*/

// MELHOR FORMA DE SE FAZER UM ARRAY DE OBJETOS (PRA ESSE CASO). FOI FEITO ATRAVÉS DO USO DE UMA FUNÇÃO!!!

/*function criarAluno(nome, n1, n2){
    return   {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
            }
        }
}*/
 
function aluno(nome, n1, n2){
    this.aluno = nome;
    this.nota1 = n1;
    this.nota2 = n2; 
    this.media = function media(){
        return (this.nota1 + this.nota2) / 2
    }
}
var a = new aluno("Davi", 9, 8);
console.log(a); 
console.log(a.media())
//var turma = [
//    criarAluno("Davi", 8.0, 7.7),
//    criarAluno("Maria", 9.2, 8.9),
//    criarAluno("Doly", 10.0, 9.6)
//]

//for (var aluno of turma){
  //  console.log(aluno)
//}


//turma.forEach(function(elemento){
//    console.log(elemento);
//})