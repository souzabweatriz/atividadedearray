//O Reduce é utilizado para reduzir os elementos de um array a um único valor. 

//PRIMEIRO EXEMPLO

let numeros = [8, 82, 73, 34, 15];
//Esse let é usado para deixar os números que serão juntados em um único valor

let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
//Aqui o reduce percorre cada número do array, somando-os gradualmente. O acumulador é o valor total acumulado até o momento, e o número é o valor atual sendo processado. A função de redução simplesmente adiciona cada número ao acumulador. O segundo argumento, 0, é o valor inicial do acumulador, que começa como zero. Ao final, obtemos a soma de todos os números do array.

console.log(soma); 
//Saída no console

//OUTRO EXEMPLO

let palavras = ['Oie,', 'tenha', 'um', 'bom', 'dia'];
//Esse let é usado para deixar as palavras que serão juntadas em uma única frase

let frase = palavras.reduce((acumulador, palavra) => acumulador + ' ' + palavra);
// Aqui o reduce é usado para percorrer cada palavra no array palavras e junta-lás , formando uma única string. 
console.log(frase);
//console "Oie, tenha um bom dia"


