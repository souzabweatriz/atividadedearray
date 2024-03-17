//Verifica se todos os elementos do array satisfazem uma condição específica

let numeros = [0.5, 13, 9, 0, 5];
//Defino os numeros que serão "testados"

let MaioresQueZero = numeros.every(numero => numero > 0);
//Neste caso, a condição especificada é numero > 0, ou seja, estou verificando se todos os números no array são maiores que zero. 

console.log(MaioresQueZero); 
//Resposta do console

//OUTRO EXEMPLO

let animais = ['gato', 'cachorro', 'pássaro', 'peixe'];
//Defino aos animais que serão "testados"

let todoscommaisde3letras = animais.every(animais => animais.length > 3);
//Eu estou usando a função de callback para verificar se o comprimento de cada "animal" é maior que 3 caracteres. Se todas os "animais" atenderem a essa condição, o resultado é true; caso contrário, é false

console.log(todoscommaisde3letras); 
//mostra o resultado no console
