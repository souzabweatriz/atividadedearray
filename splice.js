//O método splice() é usado para alterar o conteúdo de um array, adicionando ou removendo elementos desse array. Ele pode ser usado para:

//Remover elementos: Você pode remover elementos de um array especificando o índice inicial e a quantidade de elementos a serem removidos.
//Adicionar elementos: Você pode adicionar elementos a um array especificando o índice onde deseja adicionar os novos elementos e quantos elementos deseja remover, se houver, seguido pelos elementos que deseja adicionar.

//Adicionar elementos
let Lições = ['Química', 'Matemática', 'Português', 'Artes', 'História'];
//Aqui eu criei uma variável chamada "Lições" que contém um array de strings representando diferentes Lições para casa.
let Liçãocurso = ['Atividade Array'];
// Aqui eu criei outra variável chamada "Liçãocurso" que contém um array com uma única string, que vou acrescentar na lista
Lições.splice(1, 0, ...Liçãocurso);
//Eu usei o método splice() para adicionar os mais uma lição do array Liçãocurso na posição 1 do array Lições, também usei o operador de propagação (...) que é usado para descompactar o array Liçãocurso, permitindo que seus elementos sejam adicionados individualmente à lista Lições.
console.log('Lista de Lições atualizada:');
//Aqui é a parte em que é mostrada a mensagem indicando que a lista de lições foi atualizada.
console.log(Lições);
//e aqui aparece a lista "Lições" atualizada

//Outro exemplo

let listadecantores = ['Melanie Martinez', 'Lana del Rey', 'The weeknd', 'Taylor Swift', 'Olivia Rodrigo'];
//Aqui eu utilizei uma variável chamada "listadecantores" para listar o nome de alguns cantores que eu gosto
listadecantores.splice(2, 1, 'Mitski');
//E aqui eu usei o splice para adicionar uma cantora no lugar do outro cantor que estava lá na posição 2
console.log('Lista de cantores favoritos atualizados:');
//Usei o console para exibir a mensagem
console.log(listadecantores);
//E outro console para a listagem após as alterações

//AGORA REMOVER ELEMENTOS
let itensdepapelaria = ['lápis', 'borracha', 'caderno', 'apontador', 'estojo'];
// Utilizei uma variável para listar os itens da lista de materiais 
itensdepapelaria.splice(1, 3);
// Remove 2 elementos a partir do índice 1
console.log(itensdepapelaria); // itens removidos ['borracha', 'caderno', 'apontador']

//Outro exemplo
let aquesobrareuamomais = ['Mily', 'Manu', 'Leonardo']
//Criei uma variável chamada "aquesobrareuamomais" para listar amigos
aquesobrareuamomais.splice(1, 2);
// Remove 2 elementos a partir do índice 1
console.log('amo mais a');
//Mostra no console a mensagem
console.log(aquesobrareuamomais);
//Mostra a que sobrou, nomes removidos [Manu, Leonardo]

//AGORA SUBSTITUIR ELEMENTOS
let letras = ['a', 'b', 'c', 'd', 'e'];
//Criei uma variável chamada "letras" para listar o alfabeto
letras.splice(1, 2, 'x', 'y', 'z');
// Remove 2 elementos a partir do índice 1 e substitui por 'x', 'y' e 'z'
console.log(letras);
// resposta final ['a', 'x', 'y', 'z', 'd', 'e']

//Outro exemplo
let listaDeCompras = ['nutella', 'Pão', 'lasanha', 'iogurte', 'coquinha gelada'];

// Substituindo 'Lasanha' por 'sorvete'
listaDeCompras.splice(2, 1, 'sorvete');

console.log('Lista de compras atualizada:');
console.log(listaDeCompras);
// Mostra a lista de compras atualizada ['nutella', 'Pão', 'sorvete', 'iogurte', 'coquinha gelada'];



