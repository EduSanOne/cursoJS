let num = document.getElementById('itxtnum')
let lista = document.querySelector('select#itab')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if ( n > 0 && n <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, valores){
    if (valores.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    res.innerHTML = ''
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert('Insira um número válido')
    }
    num.focus()
    num.value = ''
}

function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    let media = soma / tot
    res.innerHTML += `<p>Foram ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior número cadastrado é ${maior}.</p>`
    res.innerHTML += `<p>O menor número cadastrado é ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos números cadastrados é ${soma}.</p>`
    res.innerHTML += `<p>A média de todos números cadastrados é ${media}.</p>`
}