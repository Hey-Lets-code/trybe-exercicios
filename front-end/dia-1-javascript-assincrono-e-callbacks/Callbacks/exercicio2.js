const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
// ({}) dessa forma ele entende que é uma propriedade?
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);
// essa parte não entendi;
/* 
   Link do Math.random(): 
   Link do Math.floor(): 
*/
const getUser = (callback) => {
  setTimeout(() => {
    const user = callback({
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    });
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo