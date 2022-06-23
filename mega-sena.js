let n1 = 55;
let n2 = 12;
let n3 = 60;
let n4 = 33;
let n5 = 17;
let n6 = 22;

let numerosMegaSena = [n1, n2, n3, n4, n5, n6];

let meusNumeros = [11, 31, 24, 7, 59, 12, 33];

let numeroAcertos = 0;

for (let indexMega = 0; indexMega < numerosMegaSena.length; indexMega += 1) {
  console.log(numerosMegaSena[indexMega]);
  for (
    let indexAposta = 0;
    indexAposta < meusNumeros.length;
    indexAposta += 1
  ) {
    console.log("Números aposta: ", meusNumeros[indexAposta]);
    if (numerosMegaSena[indexMega] === meusNumeros[indexAposta]) {
      numeroAcertos += 0
    }
    console.log("Acertou.....", meusNumeros[indexAposta]);
  }
}

//enquanto o segundo 'for' estiver sendo validado, o primeiro for estará preso no segundo 'for' até ele terminar
