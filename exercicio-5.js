const base = 80;
const ladoUm = 60;
const ladoDois = 40;
let somaDosAngulos = base + ladoUm + ladoDois
let t = true
let f = false
if (somaDosAngulos >= 180 && somaDosAngulos <= 360) {
    console.log(t)
} else if (somaDosAngulos < 180 && somaDosAngulos > 0){
    console.log(f)
}else{
    console.log('Mensagem de erro: ângulo inválido')
}