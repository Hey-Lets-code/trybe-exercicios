const printName = function () { //função anônima dentro de uma constante
    const myName = 'Letícia'; // O Uso de funções anônimas é recorrente pq essa função não será 
    return myName; // chamada novamente
  };
  
  console.log(printName());

  //Arrow function, não utiliza o nome 'function'
  const imprimeNome = () => {
    const myName = 'Augusta';
    return myName;
  };
  
  console.log(imprimeNome());

//Nessa arrow function não preciso chamar as chaves e nem o return;
  const printName2 = () => 'Letícia Augusta Xavier'; //Arrow function
  console.log(printName2()); //Chamada da Arrow Function

const multiplyByTwo = number => number * 2; //number é um parametro
console.log(multiplyByTwo(10)); // **Não entendi - Perguntar na monitoria
console.log(multiplyByTwo(5)); 
// Como ele está reconhecendo o parametro, pq o parametro está repetido??
// Ele está substituindo o lugar do () 

const multiplication = (number, multi) => number * multi; 
console.log(multiplication(8, 2));
/* Pq aqui necessitou os parênteses? Bom, os parâmetros estão preenchendo o ()*/

const soma = (numeroUm, numeroDois) => numeroDois + numeroUm;
/* Arrow Function o return está implícito*/ 
console.log(soma(40, 50));

const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('fala tribo, beleza?'));
/* The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words. */

//Sem arrow function:
function objetoPessoa (nome,idade) {
  return { // não entendi pq o return usou chaves, o return está criando o objeto?
    nome: nome,
    idade: idade
  }
}

console.log(objetoPessoa('Letícia', 22));

// Utilizando arrow function:
const pessoa = (nome, idade) => ({nome: nome, idade:idade}) 
// Precisa utilizar os parênteses para que a arrow function identifique como objeto, senão
// ela reconhecerá como corpo da função se houver apenas as {};
console.log(pessoa('Letícia Augusta', 22));
