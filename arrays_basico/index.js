/**
 * Arrays -> Coleção de dados do tipo objeto indexado, pode armazenar varios valores em uma unica variável;
 * Uma boa prática é criar o array com um único tipo de dados;
 * 
 */

//Exemplos:

// indices        0       1       2
const nomes = ['Lucas', 'Pedro', 'Maria']; 
console.log(nomes); // array completo

console.log(nomes[0]); // Acessando o primeiro elemento do array

nomes[1] = 'Joaquim'; // Acessando e alterando o segundo elemento do array
console.log(nomes)

nomes[3] = 'Ciclano'; // Adicionando elemento no array
console.log(nomes)

console.log(nomes.length); // Quantidade de elementos do array

//===================================================================================

nomes.push('João'); // Adicionando elemento no final do array
console.log(nomes);

nomes.unshift('Joaquim'); // Adicionando elemento no inicio do array
console.log(nomes);

nomes.pop(); // Removendo elemento do final do array
console.log(nomes);

nomes.shift(); // Removendo elemento do inicio do array
console.log(nomes);

console.log(nomes.slice(1, 3)); // Retorna um novo array com os elementos selecionados

