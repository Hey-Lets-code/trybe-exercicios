//Exercícios contendo: array e loop for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// 4.A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// 5.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 🚀 6.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// 7.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// 8.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// 9.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// 10.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
