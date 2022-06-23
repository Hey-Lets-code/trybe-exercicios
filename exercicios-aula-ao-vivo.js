let arrayNomes = ['MARCELO', 'CARLA', 'MARLENE', 'ADRIANA'];
let arrayNumeros = [1, 23, 55, 9, 0, 11];
let qualquerCoisa = [12, 'Letícia', 6, true];
//é possível caminhar através dos index
//utilizando o for

for(let index = 0;index < arrayNomes.length; index += 1){
    console.log(arrayNomes[index]) //conjunto de comandos executados
}

console.log(arrayNumeros[arrayNumeros.length - 1]);

//index ++; index += 1; index + 1
let n = 0;

console.log(n++); //imprime n primeiro
console.log(n); //imrpime n
console.log(++n); //imprime ++ primeiro e depois n
//+= permite vc escolher quantos vc irá percorrer;

