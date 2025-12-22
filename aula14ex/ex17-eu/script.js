function gentab() {
    var num = window.document.getElementById('inum').value
    var res = window.document.getElementById('res')
    var c = 1

    res.innerHTML = ''
    if (num === ''){
        window.alert('[ERRO] - Insira um número valido no campo abaixo!')
    } else {
        for (num;c <= 10; c++)
        res.innerHTML += `${num} X ${c} = ${num*c}<br>` 
    }

    
}