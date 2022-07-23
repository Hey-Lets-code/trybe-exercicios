// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e 
// a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// const newEmployees = () => {
    // const employees = {
    //   id1: '', 
    //   Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    //   id2: '', 
    //   Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    //   id3: '', 
    //   Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    // }
    // return employees;
//   };

//   const pessoa = (nomeCompleto, email) => {
    // return {
        // nomeCompleto,
        // email,
    // }
//   }

//   console.log(newEmployees);

const pessoaContratada = (nomeCompleto) => {
  return {
    nomeCompleto, // replace(' ', (_))
    email: `${nomeCompleto.split(',').join('_').toLowerCase()}@trybe.com` // ${Pense nesse espaço como uma função}
  } // o split transforma em um array - excluindo o que foi passado como parâmetro
  // enquanto o join pega o array e transforma em string concatenando com o que foi passado como parametro
}
console.log(pessoaContratada('Lízia Towata'));

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Letícia,Augusta'), // esse callback é uma função e tá recebendo um parametro
      // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('João,Matheus'), 
      // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Lízia,Towata'), 
      // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  }

  console.log(newEmployees(pessoaContratada));