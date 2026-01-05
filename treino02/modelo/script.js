let num = document.getElementById('itxtnum')
let res = document.getElementById('res')
let lista = document.querySelector('select#itab')
let valores = []

function adicionar() {
    res.innerHTML = ''
    if (Number(num.value) > 0 && Number(num.value) <= 100){
        if (valores.indexOf(Number(num.value)) == -1) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Número ${num.value} adicionado.`
            lista.appendChild(item)
        } else {
            alert (`O número ${num.value} já foi adicionado. `)
        }
    } else {
        alert('Adicione um número válido entre 1 e 100.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let listaloc = ''
    for (let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if (valores[pos] < menor){
            menor = valores[pos]
        }
        
    }
    let media = soma / tot
    for (let pos in valores){
        listaloc += `${valores[pos]}; `
    } 
    res.innerHTML += `<p>Os valores da lista foram { ${listaloc}}</p>`
    res.innerHTML += `<p>Foram cadastrados ${tot} números</p>`
    res.innerHTML += `<p>O maior número da lista foi ${maior}</p>`
    res.innerHTML += `<p>O menor número da lista foi ${menor}</p>`
    
    res.innerHTML += `<p>A soma de todos números foi ${soma}</p>`
    res.innerHTML += `<p>A média dos valores foi ${media}</p>`
}