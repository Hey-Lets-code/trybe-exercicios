function handleSubmit(event) {
    event.preventDefault();
  }

function clearFields() {
    const conteudoDaPagina = document.querySelectorAll('input');
    const conteudoTextArea = document.querySelector('textarea');
    for (let index = 0; index < conteudoDaPagina.length; index += 1) {
      const userInput = conteudoDaPagina[index];
      userInput.value = '';
      userInput.checked = false;
    }
    conteudoTextArea.value = '';
  }

  window.onload = function () {
    const apagar = document.querySelector('#apagar');
    apagar.addEventListener('click', clearFields);
    const enviar = document.querySelector('#enviar');
    enviar.addEventListener('click', handleSubmit);
  };