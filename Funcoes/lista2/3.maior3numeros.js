// Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
import { question } from 'readline-sync'

function main() {
    console.log('|**** NÚMEROS ****|')
  
    const n1 = get_number('Primeiro número: ')
    const n2 = get_number('Segundo número: ')
    const n3 = get_number('Terceiro número: ')
  
    let maior = verificar_maior(n1, n2, n3)
  
    console.log('O maior número é ' + maior)
  }
  
  function get_number(texto) {
    const numero = Number(question(texto))
    return numero
  }
  
  function verificar_maior(n1, n2, n3) {
    let maior = 0
  
    if (n1 > n2 && n1 > n3) {
      maior = n1
    } else if (n2 > n1 && n2 > n3){
      maior = n2
    } else {
        maior = n3
    }
    return maior
  }
  
  main()