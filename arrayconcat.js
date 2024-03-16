//Primeiro exemplo
let cores = ['azul', 'roxo', 'vermelho'];
//Foi criada uma let (variável) chamada "cores" que armazena um array com três strings: "azul", "roxo" e "vermelho"
let animais = ['gato', 'cachorro', 'hamster'];
//Foi criada uma let (variável) chamada "animais" que armazena um array com três strings representando nomes de animais
let total = cores.concat(animais);
// Aqui, estamos utilizando o método concat para combinar os arrays cores e animais em algo único. O método concat() cria um novo array ''juntando'' os elementos dos outros dois arrays (cores e animais) e o resultado é armazenado no let total.

console.log(total);
//Por fim, é mostrado o array total no console, que agora contém todos os elementos de cores seguidos pelos elementos de animais

//Outro exemplo pode ser:

let número1 = [[2]];
let número2 = [4, [5]];
//Aqui, fiz a definição de dois arrays o número1 contendo um array com um único elemento [2], enquanto número2 contém dois elementos, sendo o segundo um array 

let números = número1.concat(número2);
//Foi utilizado o método concat() para combinar número1 e número2 em um novo array chamado números, nisso é criado um novo array contendo todos os elementos de número1 seguidos pelos elementos de número2, Portanto, "números" será [ [2], 4, [5] ].
console.log(números);
// resulta em [ [2], 4, [5] ], assim como escrito na ultima explicação

número1[0].push(3);
//Aqui é adicionado o número 3 ao array "número1", depois dessa alteração o número1 será [[2, 3], 4, [ 5 ]]

console.log(números);
// resulta em [[2, 3], 4, [5]]