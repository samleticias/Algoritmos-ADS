// Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
// (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
// formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
// escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
import {question} from 'readline-sync'

function main(){
    const n1 = get_number('Medida do 1o lado: ')
    const n2 = get_number('Medida do 2o lado: ')
    const n3 = get_number('Medida do 3o lado: ')

    let ler_medidas_lados = verificar_lados(n1, n2, n3)
}
function verificar_lados(n1, n2, n3){
    if ((n1 + n2) > n3 && (n1 + n3) > n2 && (n2 + n3) > n1){
        if ( n1 === n2 && n1 === n3){
            console.log('Formam um triângulo equilátero')
        } else if (n1 === n2 || n1 === n3){
            console.log('Formam um triângulo isósceles')
        } else if ( n1 != n2 && n1 != n3){
            console.log('Formam um triângulo escaleno')
        }
    } else {
        console.log('Não formam um triângulo')
    }
}


function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()