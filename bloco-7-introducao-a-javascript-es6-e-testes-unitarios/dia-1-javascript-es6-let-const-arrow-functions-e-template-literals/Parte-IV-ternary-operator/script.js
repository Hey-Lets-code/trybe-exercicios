// Sintaxe:
// `condição avaliada` ? `if condition is true returns ...` : `if condition is false returns ...`;

const newLocal_1 = 1 + 1 === 2; // Pq o lint fez isso?
// Estrutura:
const trueExpression = (newLocal_1) ? `verdade // true` : `mentira // false`;
console.log(trueExpression); 

const newLocal = 2 + 2 === 3;
const falseExpression = (newLocal) ? `verdade // true` : `mentira// false`;
console.log(falseExpression); 

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };

  console.log(checkIfElse(22));
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  console.log(checkTernary(17));
  // ------------------------
  
  // Aqui não é uma boa prática usar o ternário:
  const checkIfElse2 = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };

  console.log(checkIfElse2 ('banana'));

  const checkTernary2 = fruit => (fruit === `maçã`) ? `Essa fruta é vermelha`
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  console.log(checkTernary2('maçã'));
  // Colocar muitos operadores  ternários, não é uma boa prática,
  // torna o seu código difícil de ler.

  const nome = "Gus";
const modulos = [1];
const empresa = {
  nome: "Trybe",
  nota: 8001,
};

modulos.push(3);
// nome = "Batman";
empresa.nota = 8002; // alteração de objeto
