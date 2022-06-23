//Explicação dos exercícios

//Seria muito difícil escrever um por um, porque seriam muitas variáveis para declarar, por exemplo:
let pizza1 = "4 queijos";
let pizza2 = "Frango com catupiry";
let pizza3 = "Marguerita";
let pizza4 = "Palmito";
let pizza5 = "Chocolate";

//Para adicionar um valor:
//pizzas[5] = 'peito de peru'
//Para sobrescrever um valor: pizzas [0] = 'peito de peru'
//No último exemplo ele reescreve '4 queijos' que está ocupando a posição 0'

let pizzas = [
  "4 queijos",
  "Frango com catupiry",
  "Marguerita",
  "Palmito",
  "chocolate",
];

console.log(pizzas[0]);

pizzas.push("Peito de peru");
pizzas.push("Gratinada");
console.log(pizzas[5]);

//O uso do 'push' é mais eficiente para enviar o valor para a última posição;

console.log(pizzas.sort());
console.log(pizzas.length);
console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);
console.log(pizzas[3]);
console.log(pizzas[4]);
console.log(pizzas[5]);
console.log(pizzas[6]);
//length representa a quantidade de valores presentes no array
//sort ordena os arquivos -> variavel.sort()]
//se você colocar pizzas[n] (o índice) ele irá exibir o arquivo
//se não houver o índice retornará undefined

for (let index = 0; index < pizzas.length; index++) {
  console.log(pizzas[index]);
}
//o mesmo código acima, só que utilizando o for
//adicionei o gratinado, pq estou utilizando o length

let tasksList = ["Tomar café", "Reunião", "Brincas com o cachorro"];

let searchForFirstTask = tasksList[0];
//Retorna o primeiro valor do array 'tasksList'
let searchForLastTask = tasksList[tasksList.length - 1];
//Retorna o último valor do array 'tasksList'
console.log(searchForFirstTask);
//Tomar café
console.log(searchForLastTask);
//Brincar com o cachorro
console.log(tasksList.length);
//retorna 3

//Info adicional:
tasksList.pop();
console.log(tasksList);
// ['Tomar café'. 'Reunião]
//Para remover utilize: xxx.pop();
//Para adicionar no início utilize: xxx.unshift()
//Para remover o primeiro item da lista utilize: .shift()
let indexOfTask = tasksList.indexOf("Reunião");
console.log(indexOfTask);
//retorna o valor 1

//EXERCÍCIO 1 - Obtenha o valor 'Serviços' do array menu:
let menu = ["Home", "Serviços", "Portifólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);

//EXERCÍCIO 2 -  Procure o índice do valor "Portfólio" do array menu:
let menuDois = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menuDois.indexOf("Portfólio");

console.log("Portfólio ocupa a posição: ", indexOfPortfolio);

//EXERCÍCIO 3 -  Adicione o valor "Contato" no final do array menu:
let menuTres = ["Home", "Serviços", "Portfólio", "Links"];
menuTres.push("Contato");

console.log(menuTres);

//Exercício de contador
let multiplicacao = 7;
for (let index = 1; index <= 9; index += 1) {
  console.log(multiplicacao * index);
}

//Exercício 4 - Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

//for/of
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}

//1
//2
//3
//4
//5

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

//n altera o valor
console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

//Exercício 5 - Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ["João", "Maria", "Antônio", "Margarida"];
for (let name of names) {
  console.log(name);
}

for(let index = 0; index < 10; index+=1 ){
  console.log('Oie');}

//while/do - exercícios

let counter = 0;

while(counter !== 5) { //ou <5
  counter += 1;

  console.log (counter)
}

//segundo exercício
function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
}