/*
    Acesse o elemento elementoOndeVoceEsta.

    Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

    Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
    Você se lembra dos vídeos da aula anterior, como fazer isso?

    Acesse o primeiroFilho a partir de pai.

    Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

    Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

    Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

    Agora acesse o terceiroFilho a partir de pai.
*/

console.log(document.getElementById('elementoOndeVoceEsta'));

//dúvida - questão: Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let whoIsYourFather = document.getElementById('elementoOndeVoceEsta').parentNode
whoIsYourFather.style.color = 'red'
console.log(whoIsYourFather)

let firstChild = document.getElementById('elementoOndeVoceEsta').firstElementChild
console.log(firstChild)
firstChild.innerText = 'Esse é um innerText do primeiro filho do Filho'

let myFirstChild = document.getElementById('pai').firstElementChild
console.log(myFirstChild)

let myFirstBrother = document.getElementById('elementoOndeVoceEsta').previousElementSibling
console.log(myFirstBrother)

//duvida - questão: Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let twoPreviousElements = document.getElementById('elementoOndeVoceEsta').parentElement.innerText
console.log(twoPreviousElements)

let myThirdBrother = document.getElementById('elementoOndeVoceEsta').nextElementSibling
console.log(myThirdBrother)

let myLastSon = document.getElementById('pai').lastElementChild
console.log(myLastSon)