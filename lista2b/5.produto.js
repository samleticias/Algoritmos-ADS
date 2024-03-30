// Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
// sempre pelo mais barato.
import {question} from 'readline-sync'

function main(){
    const p1 = get_number('Valor do 1º produto: ')
    const p2 = get_number('Valor do 2º produto: ')
    const p3 = get_number('Valor do 3º produto: ')

    console.log(comparar_preco(p1, p2, p3))

}

function comparar_preco(p1, p2, p3){
    if (p1 < p2 && p1 < p3){
        return `O primeiro produto de preço ${p1.toFixed(2)} é o mais barato`
    } else if (p2 < p1 && p2 < p3){
        return `O segundo produto de preço ${p2.toFixed(2)} é o mais barato`
    } else {
        return `O terceiro produto de preço ${p3.toFixed(2)} é o mais barato`
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()