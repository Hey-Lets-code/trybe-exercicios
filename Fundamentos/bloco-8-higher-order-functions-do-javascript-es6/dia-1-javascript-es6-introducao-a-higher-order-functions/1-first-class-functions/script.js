// First-class citizen: funções podem ser atribuídas à variáveis, passadas como argumento 
// e/ou retornadas por outras funções, exemplos abaixo:

function squareTest(y) { // sem arrow function
    return y * y; 
}

const square = (x) => x * x; // arrow function

// let f = square(5); aqui houve uma atribuição de valor
let f = square 

console.log(squareTest); // retorna [Function: squareTest]
console.log(square); // retonra [Function: square]
console.log(f); // retorna [Function: square]
console.log(f(5));

// Aqui ele está passando funções como argumento para outra função // nao entendi!!!!!
const sayHello = () => {
    return ('hello trybers'); // Essa arrow function apenas retorna essa frase
  }
  
  const printGreeting = (callback) => { // não entendi 
      console.log(callback()); // aqui ele tá chamando uma função pelo parametro????
  }
  
  printGreeting(sayHello); // dentro da função printGreeting foi passado um parametro sayHello?


  // Aqui ele mostra como retornar uma função de outra função:
  const sumFixAmount = (amount) => {
    return (number) => amount + number; // não entendi essa linha, pq tem um parametro no return?
  } // Quando que o parametro number é utilizado?
  
  const initialSum = sumFixAmount(15) // 15 é o parametro amount?

  console.log(initialSum(5)); // onde esse 5 tá encaixado??

  function getMultiplier (multiplier) {
    return function (aNumber) {
      return aNumber * multiplier
    }
  }

  const double = getMultiplier(2); // 

  console.log(double); // retorna função anonima

  console.log(double(8)); // retorna 8 * 2 
  // --> esse 8 está encaixado no parametro aNumber
  // --> esse 2 está encaixado na const double que recebe a função getMultiplier
  // ou seja, 2 é o parametro de getMultiplier que está armazenado na const double
