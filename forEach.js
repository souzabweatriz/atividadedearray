//O forEach() é um método de array que permite executar uma função para cada elemento de forma iterativa, é usado principalmente para iterar sobre os elementos de um array sem a necessidade de usar um loop (for ou while) tradicional.


//let numeros = [1, 2, 3, 4, 5];
//Cria um array chamado "numeros" com números de 1 a 5

//numeros.forEach(function (elemento, índice) {
    //O código percorre o array de números e para cada número encontrado, mostra uma mensagem no console indicando o número e em qual posição ele está no array.

    //console.log(`o número ${elemento} está na posição ${índice}`);
//});
//Exibe no console uma mensagem contendo o valor do cada um e a sua posição no array

//Outro exemplo

let amigos = [
    { nome: 'Isabella', filmefavorito: 'Vingadores', curso: 'Desenvolvimento de Sistemas' },
    { nome: 'Othavio', filmefavorito: 'Interestelar', curso: 'Eletroeletrônica' },
    { nome: 'Isabel', filmefavorito: 'Minions', curso: 'Mecânica' }
];
//Aqui eu criei uma variável chamada "amigos" que contém um array de objetos. Cada objeto representa um amigo com três itens em cada um deles, nome, filme favorito e curso.

amigos.forEach(function(amigo) {
  console.log(`Oie, meu nome é ${amigo.nome} e meu filme favorito é ${amigo.filmefavorito} e estou no curso de ${amigo.curso}.`);
});
//No forEach foi criada uma função para cada um dos amigos e dentro dela  tem uma mensagem usando os dados deles
