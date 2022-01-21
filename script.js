//function obj(n, s){
//        return {nome: n, sobrenome: s}
//}
//
//var a = obj("Neymar", "Júnior");
//console.log(a);

function obj(n , s){
    this.nome = n;
    this.sobrenome = s;
}

var a = new obj("Neymar", "Júnior");
console.log(a);