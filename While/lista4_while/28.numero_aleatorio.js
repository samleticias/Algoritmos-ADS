/*
Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.

*/
import { question } from 'readline-sync'
import { get_number_min, print, get_number} from '../utils/io_utils.js'
import { get_random_number } from '../utils/math_utils.js'

function main(){
  const numero = get_number_min('Digite valor máximo para o número: ')
  const nome = question('Digite seu nome: ')

  let resultado = ""

  // Processamento 
  const tentativas = verificar_numero(numero)

  // Saída
  print(`
    >>> NÚMERO SECRETO <<<
    Nome: ${nome} -- (${tentativas}) tentativas
    ---------------------------------
    RESULTADO: Parabéns, ${nome}! Você acertou!
  `)
}

function verificar_numero(numero){
    // 1. Estado Anterior
    const secret_number = get_random_number(1, numero+1)
    let tentativa = get_number('Primeira tentativa: ')
    
    let contador = 1
  
    while (tentativa != secret_number){
      if (tentativa > secret_number){
        print('O número secreto é MENOR!')
      }else{
        print('O número secreto é MAIOR!')
      }

      tentativa = get_number('Nova Tentativa: ')
      contador++
    }
  
    return contador
  }

main()