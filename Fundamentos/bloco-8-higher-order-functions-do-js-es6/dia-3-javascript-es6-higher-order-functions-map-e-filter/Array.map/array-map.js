function comFor () {
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames);
}

function comMap () {
  const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
}

function retorneNumeroPositivo () {
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
const positiveNumbers = numbers.map((number) => (!(number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(positiveNumbers); // [ 1, 2, 3, 4, 5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

}

function listaDeNumeros () {
    const listaNumeros = [10, 20, 30, 40];
    // const dobro = (elemento) => elemento * 2;
   const criarLista = listaNumeros.map((numero) => (numero * 2)); 
    console.log(criarLista);
}


const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] } // o que é isso?
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

function adicionarPropriedade () {
    const pessoas = ['Letícia', 'Luiz', 'Nilza', 'Patrícia', 'Solange', 'Marta','Jeová'];

    const criarPropriedade = pessoas.map((elemento) => {
        const registro = {};
        registro.nome = elemento;
        registro.empresa = 'Trybe';
        return registro
    })
    console.log(criarPropriedade); 
}
comFor();
comMap();
retorneNumeroPositivo();
listaDeNumeros();
adicionarPropriedade();

const numeros = [1, 2, 3]
const soma = numeros.reduce((total, numero) => {
  return total + numero
})
console.log(soma);