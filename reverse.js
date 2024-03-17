// é usado para inverter a ordem dos elementos de um array, modificando o array original.

//PRIMEIRO EXEMPLO

let numeros = [1, 2, 3, 4, 5];
//Let chamado numeros tem uma lista de números que serão invertidos
numeros.reverse();
//Aqui o reverse inverte a ordem dos elementos do array original.
console.log(numeros); 
// Resultado do console [5, 4, 3, 2, 1]

//OUTRO EXEMPLO

let frase = "Thiago é o melhor professor";
//Primeiro let para mostrar a frase que será invertida

let fraseInvertida = frase.split(" ").map(palavra => palavra.split("").reverse().join("")).join(" ");
//Nessa linha eu usei o "split" para separar as palavras, o reverse para deixar contrário e o join para unir tudo em uma só frase

console.log(fraseInvertida); 

