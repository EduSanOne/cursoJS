function verificar() {
    // Data atual
    var date = new Date()
    var anoAt = date.getFullYear()

    // Pega o valor do input(string)
    var txtdateNasc = window.document.getElementById('txtdate').value
    
    // Converte a string para o objeto Date
    var dataNasc = new Date(txtdateNasc)

    // Extrai o ano de nascimento
    var anoNasc = dataNasc.getFullYear()

    // Calcular idade
    var idade = anoAt - anoNasc

    // Calculo Geral
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero = ''
    var fsex = document.getElementsByName('radsex');
    if (txtdateNasc == "") {
        window.alert('[ERRO] - Os dados informados não são validos, insira a data novamente.')
        return
    } else if(fsex[0].checked){
        genero = 'Masculino'
        if (idade < 8) {
            img.setAttribute('src', 'foto-bebe-m.jpg')
        } else if (idade < 18){
            img.setAttribute('src', 'foto-jovem-m.jpg')
        } else if (idade < 50){
            img.setAttribute('src', 'foto-adulto-m.jpg')
        } else {
            img.setAttribute('src', 'foto-idoso-m.jpg')
        }
        // Resposta do input
        var res = window.document.getElementById('res')
        res.style.textAlign = 'center'
        res.innerHTML = `Seu ano de nascimento é ${anoNasc}, e você tem ${idade} anos.`
        res.appendChild(img)
    } else if (fsex[1].checked) {
        genero = 'Feminino'
        if (idade < 8){
            img.setAttribute('src', 'foto-bebe-f.jpg')
        } else if (idade < 18){
            img.setAttribute('src', 'foto-jovem-f.jpg')
        } else if (idade < 50){
            img.setAttribute('src', 'foto-adulto-f.jpg')
        } else {
            img.setAttribute('src', 'foto-idoso-f.jpg')
        }
        // Resposta do input
        var res = window.document.getElementById('res')
        res.style.textAlign = 'center'
        res.innerHTML = `Seu ano de nascimento é ${anoNasc}, e você tem ${idade} anos.`
        res.appendChild(img)
    }
}