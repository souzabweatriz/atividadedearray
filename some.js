//O "some" verifica se pelo menos um elemento do array passa no teste implementado pela função fornecida.

//PRIMEIRO EXEMPLO
let idades = [12, 15, 10];
//Nesse primeiro let são fornecidas as idades 

let maiorDeIdade = idades.some(idade => idade >= 18);
//esse segundo let verifica se pelo menos um elemento do array atende a condição, assim, verificamos se pelo menos uma das idades no array é maior ou igual a 18. (callback para saber se é maior ou igual)

console.log(maiorDeIdade); 
// o console é usado para sabr se é verdade ou mentira 

//OUTRO EXEMPLO

let itensdeskincare = ['hidratante', 'água termal', 'água micelar', 'ácido'];
//Aqui, eu criei um array chamado itensdeskincare que contém uma lista de produtos de cuidados com a pele.

let tembase = itensdeskincare.some(itensdeskincare => itensdeskincare === 'tembase');
//Aqui o some verifica se pelo menos um elemento do array satisfaz a condição especificada, se ter base retorna como (true) se não ter retorna como (false) 

console.log(tembase); 
// o console é usado para sabr se é verdade ou mentira 

