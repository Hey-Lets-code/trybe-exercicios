// const repeat = (number, action) => {
    // for (let count = 0; count <= number; count += 1) {
    //   action(count);
    // }
//   };
  
//   repeat(5, console.log);

//   const repeat = (number, action) => {
    // for (let count = 0; count <= number; count += 1) {
    //   action(count);
    // }
//   };
  
//   repeat(3, (number) => {
    // if (number % 2 === 0) {
    //   console.log(number, 'is even');
    // }
//   });

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator); // chamou a função

  const soma = (a, b) => a + b;
  const subtracao = (a, b) => a - b;
  const multiplicacao = (a, b) => a * b;
  const divisao = (a, b) => a / b;

  const calculadora = (funcao) => funcao(10, 5)
  console.log(calculadora(subtracao));
  console.log(calculadora(soma));
  console.log(calculadora(multiplicacao));
  console.log(calculadora(divisao));

  
  
// 1 - Crie uma função que retorne a string 'Acordando!!';
const fraseAcordar = () => 'Acordando';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const fraseCafe = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const fraseDormir = () => 'Partiu dormir!!';
/* 4 - Agora desenvolva uma HOF chamada doingThings e configure esta 
função para que imprima no console o resultado da execução das funções 
que você criou nos exemplos anteriores; */
const doingThings = (frase) => frase();

console.log(doingThings(fraseCafe));


  