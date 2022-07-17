const myName = 'Letícia';
let a = 2;
let b = 3;
console.log(`A soma é: ${a + b}\nA multiplicação é: ${a * b}`); 
console.log(`A soma é: ${a + b};
A multiplicação é ${a * b};
A divisão é ${a/b}`); //Aqui o template literals quebra a linha sem precisar do \n;
// Crase + variáveis dentro do -> ${} || É uma forma mais elegante de concatenar; 
// \n é um quebra de linha;
console.log(`Welcome ${myName}!`);

// Template literals:
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');