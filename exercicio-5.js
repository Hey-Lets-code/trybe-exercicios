// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  //aqui ele vai percorrer por numbers
  if (numbers[index] > higherNumber) {
    //aqui ele irá comparar o índice que aparecer com a primeira posição
    higherNumber = numbers[index]; //se a condição acima for verdadeira, ele irá armazenar na variável higherNumber o valor do índice que apareceu no loop do for
  }
}

console.log(higherNumber);
