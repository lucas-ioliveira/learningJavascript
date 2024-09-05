/*
Variáveis podem ser modificadas no decorrer do programa, servem para armazenar valores e pode ser reutilizada.

let -> tem escopo de bloco. Isso significa que uma variável declarada com let está disponível apenas dentro 
do bloco {} onde foi declarada.

var -> Tem escopo de função ou global. Isso significa que uma variável declarada com var está disponível 
em toda a função onde foi declarada ou, se declarada fora de uma função, em todo o script.

const ->  tem escopo de bloco. Isso significa que a variável está disponível apenas dentro do bloco {} 
onde foi declarada. Uma variável declarada com const não pode ser reatribuída. Uma vez que você define 
um valor para uma variável const, você não pode mudar esse valor. No entanto, isso não significa que o valor
é completamente imutável. Se a variável const for um objeto ou um array, você pode modificar as propriedades 
do objeto ou os elementos do array.
*/

// ex:

let nome = 'Lucas'; // string
console.log(nome);