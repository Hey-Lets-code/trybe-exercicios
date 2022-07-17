//Função com variáveis 
// Essa variável só existe dentro do escopo dessa função
function meuEmail() {
    let meuEmail = 'leticia@email.com';
  
    // Toda expressão dentro do escopo da função meuEmail tem acesso à variável meuEmail
    console.log(meuEmail);  
  }
  
meuEmail();

// Variável dentro de condicional
if (true) {
    // inicio do escopo do if
    var minhaIdade = '22'; //Se usar let ou const, dá erro, pq está fora do escopo do código
    //var irá mostrar o escopo do bloco if fora do escopo do if, x9 ¬¬"
    console.log(minhaIdade); // 20
    // fim do escopo do if
  }
  console.log(minhaIdade); // 20

  /* * IMPORTANTE * 

  Detalhe importante: uma função consegue segurar o var para que a função não se torne global,
  mas estruturas de repetição e condição não são capazes de fazer isso!!
  Não é uma boa prática usar 'var' por causa disso.

     * IMPORTANTE * */

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Java';
// console.log(favoriteLanguage); 
// Erro: TypeError: Assignment to constant variable.

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'ANDROID COM CERTEZA!!!';
console.log(favoriteTechnology); // Retornou Android aqui hehe

const userInfo = { //objeto dentro de chaves
    name: 'Letícia', 
    id: '1587-8',
    email: 'leticia@email.com',
  };
  
  userInfo.name = 'Teresa'; //Aqui eu mudei o nome dentro do objeto Usuário
  /* Porque a const permitiu essa mudança?
  Resposta: O Javascript permite alterar as propriedades do objeto, sem reatribuir um novo
  objeto */
  
console.log(userInfo); // { name: 'Teresa', id: '1587-8', email: 'leticia@email.com' }

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React'); //Aqui eu posso adicionar ou remover, mover itens
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); /* Erro: TypeError: Assignment to constant variable. Aqui se eu tentar
adicionar diretamente ele irá me retornar esse erro de atribuição */

/* 

*** IMPORTANTE ***

Quando você declara 'var' você está jogando a variável para o topo do escopo, mesmo
que eu coloque o console.log no topo do código e jogar a variável lá embaixo, o console.log
irá retornar a variável, mas o mesmo não irá acontecer com const e let

*** IMPORTANTE ***

*/