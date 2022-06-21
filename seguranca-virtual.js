function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value
    ConvidadoCristian= [Karol, JP, Will, Lind]
    if (ConvidadoCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Entrada autorizada'
    } else { 
        document.getElementById('PermissoaDeEntrada').innerText = 'Entrada Negada'
    }
}