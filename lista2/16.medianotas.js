// 16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
// ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
// final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
// escreva “Reprovado”.

import {question} from 'readline-sync'

function main(){
    const n1 = get_number('Digite a 1o nota: ')
    const n2 = get_number('Digite a 2o nota: ')

    const media_notas = verificar_media(n1, n2)
    let situacao = verificar_situacao(media_notas)

}

function verificar_situacao(media){
    if (media >= 7){
        console.log('APROVADO')
    } else {
        console.log('REPROVADO')
    }
}

function verificar_media(n1, n2){
    let media = (n1 + n2) / 2
    console.log(`A média do aluno equivale a ${media.toFixed(2)}.`)
    return media 
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()