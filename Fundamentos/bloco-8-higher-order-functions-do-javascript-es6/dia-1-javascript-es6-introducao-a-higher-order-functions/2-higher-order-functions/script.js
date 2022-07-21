const buttonHtml = document.getElementById('btn');
const paragrafo = document.getElementById('paragrafo');
paragrafo.innerHTML = "Texto criado de forma dinâmica!"
const contadorDeClick = () =>{
    console.log('Você clicou!');
} 

const mostreAlerta = () => {
    alert ('Você clicou no botão! hehe')
}
buttonHtml.addEventListener('click', mostreAlerta);

console.log(contadorDeClick);