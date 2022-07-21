/*
    🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

    Modifique a estrutura da função para que ela seja uma arrow function;
    Modifique as variáveis para que respeitem o escopo onde estão declaradas;
    R: declarei como let
    Modifique as concatenações para template literals.
*/

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  }

  testingScope(true);

  /* 🚀 Crie uma função que retorne um array em ordem crescente. */

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const alterarOrdem = () => {
    // oddsAndEvens[0] = 2;
    // oddsAndEvens[1] = 3;
    // oddsAndEvens[2] = 4;
    // oddsAndEvens[3] = 7; 
    // oddsAndEvens[4] = 10;
    // oddsAndEvens[5] = 13;
    

    // return oddsAndEvens
//   }

   console.log(` Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente`);

  
//   console.log(`Os números ${oddsAndEvens} se encontram ordenados em forma crescente!`); // Template literals

  /*  
  
  Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
Utilize o console.log e template literals para retornar a frase: 
'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.

    Utilize template literals para que a chamada 
    console.log(<seu código>oddsAndEvens<seu código>); 
    retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). 
Spoiler: É possível realizar uma função que ordene qualquer array de números

*/ 

let numbers = [0 , 1, 2, 3, 30, 20, 10];
// numbers.sort();
// o sort coloca o 10 na frente
// sintaxe array.sort(comparefunction)

//com arrow function
/*
numbers.sort((a,b) => {
    if (a > b) return 1;
    if (a <b) return -1;
    return 0;
});
*/

//forma simples: 

numbers.sort((a,b) => a-b) 
console.log(numbers); 

/*
Neste exemplo, o método sort() coloca 10 
antes de 2porque a string '10' 
vem antes da string '2' 
ao fazer uma comparação entre as strings.

Para corrigir essa interpretação você 
precisa passar uma função de comparação 
para o método sort(). 
O método sort() usará a função de comparação 
para determinar as ordens dos elementos.

Confira a sintaxe do método sort():
    array.sort(comparefunction)

O método sort() aceita um argumento opcional, 
que é uma função que compara dois elementos do array.

Se você omitir a função de comparação, 
o método sort() classificará os elementos com a 
ordem de classificação com base nos valores dos 
pontos de código Unicode dos elementos 
(como se fossem strings), conforme 
mencionado anteriormente.

A função de comparação do método sort() 
aceita dois argumentos e retorna um valor 
que determina a ordem de classificação. 
A seguir veremos a sintaxe da função de comparação:

function compare(a,b) {
    ...
}

A função compare() aceita dos argumentos, 
o a e o b. O método sort()
classificará os elementos com 
base no valor de retorno da função compare() 
seguindo as seguintes regras:

    Se compare(a, b) for menor que zero, 
    o método sort() classifica a para um índice menor que b. 
    Ou seja, o a virá antes de b.

    Se compare(a, b) for maior que zero, 
    o método sort() classificará b com um 
    índice menor que a, ou seja, b virá primeiro.

    Se compare(a, b) retornar zero, o método sort() 
    considera a igual a b e deixa suas 
    posições inalteradas.
*/