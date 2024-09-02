// Entrada
// A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade
// de casos de teste. Cada caso de teste é composto por três linhas, cada uma delas com uma string com até 26 caracteres 
// de 'A'-'Z' ou vazia, representando respectivamente os alimentos da dieta, do café da manhã e do almoço.

// Saída
// Para cada caso de teste imprima uma string que representa os alimentos que você deveria consumir no jantar, 
// ou "CHEATER" caso você tenha trapaceado na sua dieta.

import { question } from "readline-sync";

function main(){
    let qtd_casos_teste = get_number()
    
    for (let i = 0; i < qtd_casos_teste; i++){
        let dieta = get_text('Dieta: ')
        let cafe_manha = get_text('Café da manhã: ')
        let almoco = get_text('Almoço: ')

        almoco = almoco + cafe_manha

        for (let letra of almoco){
            if (!contem_letra(dieta, letra)){
                dieta = 'CHEATER'
                break
            } else {
                dieta = dieta.replace(letra, '')
            }
        }
        if (dieta != 'CHEATER'){
            dieta = dieta.split('').sort().join('')
        }
        console.log(dieta)
    }
}

function contem_letra(palavra, letra){
    for (let caracter of palavra){
        if (caracter == letra){
            return true
        }
    }
    return false
}

function get_number(texto){
    return Number(question(texto))
}

function get_text(mensagem){
    return question(mensagem)
}

main()
