function verificar() {
    // Ano atual
    var data = new Date()
    var anoat = data.getFullYear()
    
    // Ano nascimento e Calculo de Idade
    var anoNasc = window.document.getElementById('txtano')
    var anoNasc = Number(anoNasc.value)
    var idade = anoat - anoNasc

    // Calculo geral
        // Adicionando imagem e Genero
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        var gen = ''
        var fsex = window.document.getElementsByName('radsex')

    if (anoNasc > anoat || anoNasc <= 0){
        window.alert('[ERRO] - As informações inseridas não são validas! Por favor tente novamente!')
    } else if (fsex[0].checked){
        //masculino
        var gen = 'Masculino'
        if (idade >= 0 && idade < 5){
            img.setAttribute('src','imagens/foto-bebe-m.jpg')
        } else if (idade < 18){
            img.setAttribute('src','imagens/foto-jovem-m.jpg')
        }  else if (idade < 50){
            img.setAttribute('src','imagens/foto-adulto-m.jpg')
        } else {
            img.setAttribute('src','imagens/foto-idoso-m.jpg')
            window.document.body.style.background = 'gray'
        }
    } else if (fsex[1].checked){
        //feminino
        var gen = 'Feminino'
        if (idade >= 0 && idade < 5){
            img.setAttribute('src','imagens/foto-bebe-f.jpg')
        } else if (idade < 18){
            img.setAttribute('src','imagens/foto-jovem-f.jpg')
        }  else if (idade < 50){
            img.setAttribute('src','imagens/foto-adulto-f.jpg')

        } else {
            img.setAttribute('src','imagens/foto-idoso-f.jpg')
            window.document.body.style.background = 'gray'
        }
    }

    // Resposta do input
    var res = window.document.getElementById('res')
    res.innerHTML = `Você nasceu no ano de ${anoNasc}, e tem ${idade} anos.`
    res.appendChild(img)
    
}