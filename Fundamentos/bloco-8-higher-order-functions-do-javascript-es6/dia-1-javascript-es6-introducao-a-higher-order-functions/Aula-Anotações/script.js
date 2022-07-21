const saudacao = (nome, callback) => {
    return callback (nome) // Parametro sendo função
}

const saudacaoFormal = (nome) => {
    return `Olá ${nome}, como você está, tudo bem?`
}

console.log(saudacao('Letícia', saudacaoFormal));

