//Esse método é usado para unir todos os elementos de um array em uma string, opcionalmente separados por um separador especificado

//PRIMEIRO EXEMPLO

let frutas = ['maçã', 'banana', 'laranja'];
//a let é usada para listar as frutas que serão unidas

let texto1 = frutas.join(', ');
//Eu use o join no array frutas para unir todos os elementos do array em uma única string, onde cada elemento é separado por uma vírgula seguida de um espaço.

console.log(texto1);
//no console "maçã, banana, laranja"

//OUTRO EXEMPLO

let numeros = [1, 2, 3, 4, 5];
//a let é usada para listar os números que serão unidos

let texto2 = numeros.join('');
//Assim como no primeiro exemplo eu usei o join no array para unir todos os elemento em uma única string onde os elementos são separados apenas por uma vírgula e espaço

console.log(texto2); 
//no console: "12345"
