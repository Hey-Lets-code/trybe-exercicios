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

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//dúvida - questão: Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const papai = elementoOndeVoceEsta.parentElement
papai.style.color = 'red'

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho'

const primeiroFilho = pai.firstElementChild

const primeiroIrmao = elementoOndeVoceEsta.previousElementSibling

const atencao = elementoOndeVoceEsta.nextSibling

const terceiroIrmao = elementoOndeVoceEsta.nextElementSibling

const terceiroFilho = pai.lastElementChild.previousElementSibling

const quintoFilho = document.createElement('section')
papai.appendChild(quintoFilho)

const terceiroFilhoDoFilho = document.createElement('section')
elementoOndeVoceEsta.appendChild(terceiroFilhoDoFilho)

const filhoDoPrimeiroFilhoDoFilho = document.createElement('section')
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho)
filhoDoPrimeiroFilhoDoFilho.innerText = 'filho do primeiro filho do filho'

const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();