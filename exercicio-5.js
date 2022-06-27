const base = 80;
const ladoUm = 60;
const ladoDois = 40;

let somaDosAngulos = base + ladoUm + ladoDois;
let t = true;
let f = false;

if (somaDosAngulos === 180) {
  console.log(t);
} else if (somaDosAngulos > 0 && somaDosAngulos < 180) {
  console.log(f);
} else {
  console.log("Erro: ângulo inválido");
}

//outra solução:
let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives =
  degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: ângulo inválido");
}
