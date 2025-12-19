function contar(){
    var ini = Number(document.getElementById('iini').value)
    var fim = Number(document.querySelector('input#ifim').value)
    var pas = Number(document.getElementById('ipas').value)

    var res = window.document.getElementById('res')

    if (ini == '' || fim == '' || pas == '') {
        window.alert('[ERRO] - Insira números nos campos abaixo: ')
    }else {
        for (ini;ini <= fim; ini += pas) {
        res.innerHTML += `${ini} `
    }
    }
    res.innerHTML += `🎌`

}