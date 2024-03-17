//O método map() é usado para percorrer todos os elementos de um array e aplicar uma função a cada um deles, retornando um novo array com os resultados dessa função aplicada a cada elemento.

let numeros = [20, 32, 53, 14, 25];
//variável com os núemros que vão ser multiplicados

// Dobro de cada número
let dobros = numeros.map(function (numero) {
    return numero * 2;
});

console.log(dobros);
//mostra no console o resultado dobrado de cada número que estava na "let numeros"

//OUTRO EXEMPLO

let Fahrenheit = [77];
//Criei uma variável chamada Fahrenheit que indique a temperatura nessa unidade

let Celsius = Fahrenheit.map(tempFahrenheit => (tempFahrenheit - 32) * 5 / 9);
//Nessa parte a let recebe a temperatura em Fahrenheit e retorna a temperatura correspondente em Celsius usando a fórmula de conversão (tempFahrenheit - 32) * 5 / 9.

console.log("A temperatura em Celsius está em");
//Aqui mostra uma mensagem indicando a temperatura em Celsius

console.log(Celsius);
//E aqui é mostrado o resultado no console








