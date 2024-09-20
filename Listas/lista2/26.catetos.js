// Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
import { question } from 'readline-sync' 

function main() {
    const lado1 = get_number('Lado 1: ')
    const lado2 = get_number('Lado 2: ')
    const lado3 = get_number('Lado 3: ')

    let { hipotenusa, cateto1, cateto2 } = identificar_triangulo(lado1, lado2, lado3)

    if (hipotenusa !== null && cateto1 !== null && cateto2 !== null) {
        console.log(`Hipotenusa: ${hipotenusa}`)
        console.log(`Cateto 1: ${cateto1}`)
        console.log(`Cateto 2: ${cateto2}`)
    } else {
        console.log('Os lados fornecidos não formam um triângulo retângulo')
    }
}

function identificar_triangulo(lado1, lado2, lado3) {
    let hipotenusa, cateto1, cateto2

    if (lado1 >= lado2 && lado1 >= lado3) {
        hipotenusa = lado1
        cateto1 = lado2
        cateto2 = lado3
    } else if (lado2 >= lado1 && lado2 >= lado3) {
        hipotenusa = lado2
        cateto1 = lado1
        cateto2 = lado3
    } else {
        hipotenusa = lado3
        cateto1 = lado1
        cateto2 = lado2
    }

    if (Math.pow(cateto1,2) + Math.pow(cateto2,2) === Math.pow(hipotenusa,2)) {
        return { hipotenusa, cateto1, cateto2 }
    } else {
        return { hipotenusa: null, cateto1: null, cateto2: null }
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()

