//formas de escrever funções

//declaração de função
function imprime(texto){
    console.log(texto)
}
imprime ("Programação")
imprime ("JavaScript")
console.log("----------------")

//declaração de função com passagem de parâmetros
function soma(a,b){
    return a+b
}
console.log(soma(3,4))
console.log(soma(5,6.1))
console.log("----------------")

function multiplica(num1=3, num2=5){
    return num1*num2
}
console.log(multiplica(5,5))
console.log(multiplica())
console.log("----------------")

//declaração de função anônima e arrow function com passagem de parâmetros
//anônimo, pois não tem nome. o nome usado é da variável
const resultado = (num1,num2) =>{
    return num1/num2
}
console.log(resultado(5,5))
console.log("----------------")

const texto2 = nome => `O nome dela é ${nome}` //o uso da crase é chamado de template strings
console.log(texto2("Jeniffer"))
