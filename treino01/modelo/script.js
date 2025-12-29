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
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert('Insira um número válido')
    }
}

function finalizar(){
    
}