/*
Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
*/
import { question } from 'readline-sync'
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let valor_total = 0
    let quantidade_produto = 0
    let valor_desconto = 0

    const nome = question('Digite o nome do produto: ')
    let preco = get_number('Digite o preço do produto R$: ')
    
    let resposta = 'S'
    
    while(resposta !== 'FIM'){

        let quantidade = get_number('Digite a quantidade a ser comprada: ')
        
        valor_total += obter_desconto_por_quantidade(preco, quantidade_produto)
        quantidade_produto += quantidade

        valor_desconto = obter_valor_do_desconto(quantidade_produto)

        resposta = question('Deseja adicionar mais produtos (S/FIM)? ')
    }

    print('************ COMPRAS COM DESCONTO ************ ')
    print('--------------------------------------------------')
    print(`Nome do Produto: ${nome}`)
    print(`Valor do Desconto: ${valor_desconto}%`)
    print(`Valor Total R$ : ${valor_total.toFixed(2)}`)
    print(`Quantidade Total: ${quantidade_produto}`)


}

function obter_desconto_por_quantidade(preco, quantidade_produto){

   let valor = preco * quantidade_produto
   if (quantidade_produto <= 10){ // Até 10 unidades: valor total
    return valor
   } else if (quantidade_produto >= 11 && quantidade_produto <= 20){ // de 11 a 20 unidades: 10% de desconto
    return valor * 0.9
   } else if (quantidade_produto >= 21 && quantidade_produto <= 50){ // de 21 a 50 unidades: 20% de desconto
    return valor * 0.8
   } else { // acima de 50 unidades: 25% de desconto
    return valor * 0.75
   }
}



function obter_valor_do_desconto(quantidade_produto){
    if (quantidade_produto <= 10){ // Até 10 unidades: valor total
        return 0
       } else if (quantidade_produto >= 11 && quantidade_produto <= 20){ // de 11 a 20 unidades: 10% de desconto
        return 10
       } else if (quantidade_produto >= 21 && quantidade_produto <= 50){ // de 21 a 50 unidades: 20% de desconto
        return 20
       } else { // acima de 50 unidades: 25% de desconto
        return 25
       }

}


main()