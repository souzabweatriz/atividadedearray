//É usado para ordenar os elementos de um array. Por padrão, a ordenação é feita de forma alfabética para strings e de forma crescente para números

//PRIMEIRO EXEMPLO

let frutas = ['banana', 'amora', 'caju', 'damasco', 'laranja', 'kiwi'];
//Let para a lista de frutas ficar em ordem alfabética 

frutas.sort();
//O sort altera o array original e retorna o array ordenado

console.log(frutas);
//Mostra as frutas em ordem alfabética no console

//OUTRO EXEMPLO

let maquiagem = [
    { nome: 'gloss', preco: 390 },
    { nome: 'base', preco: 370 },
    { nome: 'blush', preco: 240 }
];
//Primeiro let mostra os itens de maquiagem e seus preços que ficarão em order do mais barato até o mair caro

maquiagem.sort((a, b) => a.preco - b.preco);
//o sort acaba comparando os preços de dois produtos a e b, caso o preço de a for menor que o preço de b, a é classificado antes de b. Se for maior, a é classificado depois de b. Se os preços forem iguais, a ordem dos produtos permanece a mesma.
console.log(maquiagem);
//mostra no console o resultado
