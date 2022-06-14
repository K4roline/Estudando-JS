let endereco = {
    rua: 'Romeu machado dos santos',
    cidade: 'Pelotas',
    CEP: 96085214
}

function exibirEndereco(endereco) {
    for (let chave in endereco)
    console.log(chave, endereco[chave])
}

exibirEndereco(endereco)