const fetch = require('node-fetch');

const getRandomAdvice = () => {
    const url = 'https://api.adviceslip.com/advice';
    return fetch(url)
    .then((response) => response.json())
    .then(({ slip: { id, advice } }) => console.log(id, advice))
    .catch((error) => console.log('Ops, algo deu errado, erro do tipo:', error.type));
    //   const { slip } = object;
    //   const { id, advice } = slip;
    //   console.log((id, advice));
    // });
   
};

getRandomAdvice();