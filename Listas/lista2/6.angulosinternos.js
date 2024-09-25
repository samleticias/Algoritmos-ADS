// Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
// se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
// verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
// obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).
import {question} from 'readline-sync'

function main(){
    const ang1 = get_number('1o angulo: ')
    const ang2 = get_number('2o angulo: ')
    const ang3 = get_number('3o angulo: ')

    let verificar_angulo = soma_angulos_internos(ang1, ang2, ang3)


}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

function soma_angulos_internos(ang1, ang2, ang3){
    if ((ang1 + ang2 + ang3) === 180){
        console.log('Os ângulos formam um triângulo, pois a soma das medidas é igual a 180 graus')
        if (ang1 < 90 && ang2 < 90 && ang3 < 90){
            console.log('Formam um acutângulo')
        } if(ang1 === 90 || ang2 === 90 || ang3 === 90){
            console.log('Formam um retângulo')
        } if (ang1 > 90 || ang2 > 90 || ang3 > 90){
            console.log('Forma um obtusângulo')
        } } else {
        console.log('Não formam um triângulo')
    }
}

main()