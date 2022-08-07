/* const fetch = require('node-fetch');
const getRandomAdvice = () => {
    const url = 'https://api.adviceslip.com/advice';
     const request = fetch(url)
    .then((response) => response.json()) // método json que retorna outra promise
    .then(({ slip: { id, advice } }) => console.log(id, advice)) // desestruturando o objeto json
    .catch((error) => console.log('Ops, algo deu errado, erro do tipo:', error.type)); // caso algo dê errado
    return request;
    // ele cai no bloco do catch
    //   const { slip } = object;
    //   const { id, advice } = slip;
    //   console.log((id, advice));
    // });
   
};

getRandomAdvice(); */ 

const fetch = require('node-fetch');

const getRandomAdvice = async () => {
     try {
        const url = 'https://api.adviceslip.com/advice';
        const request =  await fetch(url);
        const { slip: { id, advice} } = await request.json();
        console.log('\nId: ' + id + '\n\nAdvice: ' +  advice);
     } catch (error) {
    //  console.log('Ops, algo deu errado, tipo de erro:', error.type);
    console.log('Always check your Internet connection and URLs.')
       }
    }



getRandomAdvice();