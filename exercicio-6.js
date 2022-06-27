// console.log(sentence.toLowerCase())
const chessPiece = 'peao'.toLowerCase();
//rei
//bispo
//torre
//peão
//cavalo
//posições: diagonal, vertical, horizontal, se move em formato L
if (chessPiece === 'rainha') {
    console.log('Rainha -> Diagonal, horizontal e vertical')
} else if (chessPiece === 'bispo') {
    console.log('Bispo -> Diagonal');
} else if (chessPiece === 'torre') {
    console.log('Torre -> Vertical');
} else if (chessPiece === 'peão' || chessPiece === 'peao') {
    console.log('Peão -> Movimento vertical, ao adquirir peças movimentos diagonal');
} else if (chessPiece === 'cavalo') {
    console.log('Bispo -> Movimento em formato de L');
} else if (chessPiece === 'rei') {
    console.log('Rei -> Um movimento em qualquer direção');
} else {
    console.log('A peça não existe!')
}