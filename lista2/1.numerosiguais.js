// Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
import { question } from 'readline-sync'



function main(){
  console.log('|**** NÚMEROS ****|')

  const n1 = get_number('Primeiro número: ')
  const n2 = get_number('Segundo número: ')
  const n3 = get_number('Terceiro número: ')

  let total_iguais = verificar_igualdade(n1, n2, n3)

  console.log('O total de números iguais entre os fornecidos é ' + total_iguais + '.')
}

function get_number(texto){
  const numero = Number(question(texto))
  return numero
}

function verificar_igualdade(n1, n2, n3){
  let total_iguais = 0

  if (n1 === n2){
    total_iguais = 2

    if (n1 === n3){
      total_iguais = 3
    }
  } else if (n1 === n3){
    total_iguais = 2
  } else if (n2 === n3){
    total_iguais = 2
  } else {
    total_iguais = 0
  }

  return total_iguais
}


main()