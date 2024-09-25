import {question} from 'readline-sync'
// Leia 3 (três) números e escreva-os em ordem crescente.

function main(){
    console.log('### Numéros ###')
    const n1 = get_number('digite o primeiro numero: ')
    const n2 = get_number('digite o segundo numero: ')
    const n3 = get_number('digite o terceiro numero: ')

    let numeros = ordenar_numeros(n1, n2, n3)

}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
  }

  function ordenar_numeros(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        if (n2 <= n3) {
            console.log("Números em ordem crescente:", n1, n2, n3)
        } else {
            console.log("Números em ordem crescente:", n1, n3, n2)
        }
    } else if (n2 <= n1 && n2 <= n3) {
        if (n1 <= n3) {
            console.log("Números em ordem crescente:", n2, n2, n3)
        } else {
            console.log("Números em ordem crescente:", n2, n3, n1)
        }
    } else {
        if (n1 <= n2) {
            console.log("Números em ordem crescente:", n3, n1, n2)
        } else {
            console.log("Números em ordem crescente:", n3, n2, n1)
        }
    }
}

main()