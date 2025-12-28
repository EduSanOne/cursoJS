let num = document.getElementById('itxtnum')
let lista = document.getElementById('itab')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    res.innerHTML = ""
    if (Number(num.value) > 0 && Number(num.value) <= 100){
        if (valores.indexOf(Number(num.value)) == -1) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Número ${num.value} adicionado.`
            lista.appendChild(item)
        } else {
            alert('Número já inserido na lista, insira outro número!')
        }
        
    } else {
        alert('Insira um número valido!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    let tot = valores.length
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos] 
    }
    media = soma / tot
    res.innerHTML += `<p>Foram cadastrados ${tot} números</p>`
    res.innerHTML += `<p>O maior número é ${maior}</p>`
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores cadastrados é ${media}</p>`
}


