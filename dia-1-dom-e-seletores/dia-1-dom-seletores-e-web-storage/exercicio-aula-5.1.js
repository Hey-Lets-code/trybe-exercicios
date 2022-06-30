document.getElementById("page-title").innerText = "Catch me if you can";
document.getElementById("page-title").style.color = "pink"
document.getElementById("subtitle").innerText = "Melhor filme!";

let paragrafo = document.getElementsByClassName("paragraph");
for (let i = 0; i < paragrafo.length; i += 1) {
  paragrafo[i].innerText = "Catch me if you can is magalu";
}

document.getElementById("subtitle").innerText =
  "Catch me if you com com a Narcisa Tamborindeguy estrelando, ai que loucura";

//Utilizando o mesmo template de exercício anterior:

// Adicione uma classe igual para os dois parágrafos.
//Recupere os seus parágrafos via código JavaScript, 
// usando a função getElementsByClassName;
//Altere algum estilo do primeiro deles.
//Recupere o subtítulo e altere a cor 
//dele usando a função getElementsByTagName.

document.getElementsByClassName("paragraph")[0].style.color = "blue";
document.getElementsByTagName('h4')[0].style.color = 'blue'
document.getElementsByClassName('p')
document.getElementsByTagName('p')[0].style.color = 'yellow'
document.getElementsByTagName('h4')[0].innerText = 'ASTRAZENECA EH A ZARA'
