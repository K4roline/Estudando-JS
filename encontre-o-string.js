const filme = {
    titulo: 'Vingadores',
    ano: 2013,
    diretor: 'x',
    personagem: 'Homem de ferro'
}

exibirPropriedades(filme);
function exibirPropriedades(Object) {
    for (prop in Object)
    if(typeof Object[prop] === 'string')
        console.log(prop,Object[prop])
}