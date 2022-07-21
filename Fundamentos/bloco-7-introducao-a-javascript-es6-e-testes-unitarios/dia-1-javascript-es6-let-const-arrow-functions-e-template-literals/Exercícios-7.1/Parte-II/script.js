let fatorial = 1;
let resultado = fatorial;
let primeiroMultiplicador = fatorial - 1;

for (let index = primeiroMultiplicador; index > 1; index -=1) {
    resultado *= index;
}
console.log (resultado);

//Exercício 1 - não entendi

const factorial = (number) => {
    let result = 1;

    for (let i = 2; i <= number; i += 1) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

//Exercício 2

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const maiorPalavra = (texto) => {
    const palavraArray = texto.split(' ');
    let maxLength = 0;
    let result = '';

    for(const palavra of palavraArray) {
        if(palavra.length > maxLength) {
            maxLength = palavra.length;
            result = palavra;
        }
    }
    
    return result;
}

console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'));

//Exercicio 3

// const botao = document.getElementById('btn');
// const clickCount = 0;
// botao.addEventListener('click', function botaoClick(clicou) {
    
    // });