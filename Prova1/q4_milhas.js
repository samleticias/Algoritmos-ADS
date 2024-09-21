import { question } from 'readline-sync'
import {get_number, print} from '../utils/io_utils.js'

function main(){
    const origem = question('Origem: ')
    const destino = question('Destino: ')
    const valor_reais_site = get_number('Valor no Site em R$: ')
    const valor_milhas_site = get_number('Valor no Site em Milhas: ')

    const preco_milhas_rs = obter_preco_milhas(valor_milhas_site)
    const preco_milhas_baratas = obter_preco_milhas_baratas(valor_milhas_site)

    const porcentagem_milhas_padrao = (preco_milhas_rs / valor_reais_site) * 100
    const porcentagem_milhas_baratas = (preco_milhas_baratas / valor_reais_site) * 100
    const compra = verificar_melhor_compra(preco_milhas_baratas, preco_milhas_rs, valor_reais_site)

    const resultado = `
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MILHAS & VIAGENS <<<<<<<<<<<<<<<<<<<<<<<<<<<<
    ----------------------------------------------------------------------------
    Preço Milhas Padrão R$: ${preco_milhas_rs.toFixed(2)}
    Preço Milhas Baratas R$: ${preco_milhas_baratas.toFixed(2)}
    Valor no Site R$: ${valor_reais_site.toFixed(2)}
    Porcentagem Milhas Padrão e Valor no Site (%): ${porcentagem_milhas_padrao.toFixed(2)}
    Porcentagem Milhas Baratas e Valor no Site (%): ${porcentagem_milhas_baratas.toFixed(2)}
    Compra recomendada: ${compra}
    ----------------------------------------------------------------------------
    `

    print(resultado)

}

function verificar_melhor_compra(preco_milhas_baratas, preco_milhas_rs, valor_reais_site){
    if (preco_milhas_rs < preco_milhas_baratas && preco_milhas_rs < valor_reais_site){
        return 'Compra Milhas Baratas é a melhor opção!'
    }else if (preco_milhas_baratas < preco_milhas_rs && preco_milhas_baratas < valor_reais_site){
        return 'Compra Milhas Padrão é a melhor opção!'
    } else {
        return 'Compra em R$ é a melhor opção!'
    }
}

function obter_preco_milhas(valor_milhas_site){
    const preco_reais_para_milhas = (valor_milhas_site/1000) * 70
    return preco_reais_para_milhas
}

function obter_preco_milhas_baratas(valor_milhas_site){
    const preco_reais_para_milhas_baratas = (valor_milhas_site/1000) * 14.50
    return preco_reais_para_milhas_baratas
}

main()