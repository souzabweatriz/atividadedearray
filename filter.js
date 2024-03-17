// Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//O let tem uma lista de números 

let Pares = numeros.filter(numero => numero % 2 === 0);
//Esse segundo let vai confirmar quais números são pares dividindo eles por 2, o que ter resultado 0 é par

console.log(Pares); 
// Resultado no console [2, 4, 6, 8, 10]

//OUTRO EXEMPLO

let livros = [
    { titulo: 'A garota que você deixou para trás', genero: 'Romance' },
    { titulo: 'O lado feio do amor', genero: 'Romance' },
    { titulo: 'Quem é você, Alasca?', genero: 'Ficção Juvenil' }, 
    { titulo: 'Orgulho e Preconceito', genero: 'Romance' }
  ];
  //Criei um array de objetos chamado livros, onde cada objeto representa um livro com um título e um gênero.
  
  let Romance = livros.filter(livro => livro.genero.includes('Romance'));
  //E utilizei o filter para filtrar os livros de romance

  console.log ("Os livros desse genêro são:")
  console.log(Romance);
  //Mostra no console a mensagem e os livros do genêro escolhido

  
