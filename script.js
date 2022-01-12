var n1 = parseFloat(prompt("Isira a primeira nota"));
var n2 = parseFloat(prompt("Insira a segunda nota"));
var m = (n1+n2) / 2 ;
var conceito = ""

if ( m >= 8.5){
    conceito = "Ótimo";    
}
else if (m >= 6.5){
    conceito = "Bom";
}    
else{
    conceito = "Regular";
}

console.log(m);
console.log(conceito);

//conceito = "vasco";

switch(conceito){

    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno");
        break;
    case "Bom":
        console.log("Parabéns você é um bom aluno e tem mais potencial a ser explorado");
        break;
    case "Regular":
        console.log("Você precisa de um pouco mais de dedicação");
        break;
    default:
        console.log("Houve algum erro");
}