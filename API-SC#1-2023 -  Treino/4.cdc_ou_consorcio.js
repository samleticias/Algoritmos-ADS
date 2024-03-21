import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
    const valor_carro = 185000
    const perc_fipe = get_positive_number('Percentual FIPE (%): ')
    const prazo = get_positive_number('Prazo (em meses): ')
    const juros = get_positive_number('Taxa de juros (1.2% a 2.5%): ')
    const taxa_adm = get_positive_number('Taxa de Administração Consórcio: ')

    const valor_para_parcelar = ValorAParcelar(valor_carro,perc_fipe)
    const entrada= (perc_fipe/100 * 89000)

    
    const valorJuros = obterJuros(valor_para_parcelar, juros, prazo)
    const parcela_cdc = parcela(valor_para_parcelar, valorJuros, prazo)
    const cdcTotal = (parcela_cdc * prazo)


    const jurosConsorcio = obterValorJuros(valor_para_parcelar, taxa_adm)
    const consorcioTotal = (obterValorTotal(valor_para_parcelar, jurosConsorcio))
    const parceladoConsorcio = parcelaConsorcio(consorcioTotal, prazo)
    
    print(`Valor do Bem: R$ ${valor_carro}`)
    print(`Valor a ser parcelado: R$ ${valor_para_parcelar}`)

    const resultado_cdc = `
    -----CDC-----
    Juros totais: R$ ${valorJuros.toFixed(2)}
    Parcelamento: ${prazo} de R$ ${parcela_cdc.toFixed(2)}
    Total a pagar : (R$ ${entrada} + Prestações : R$ ${cdcTotal.toFixed(2)}
    `

    const resultado_consorcio = `
    ---CONSORCIO---
    Juros totais: R$ ${jurosConsorcio}
    Parcelamento: ${prazo} prestações de R$ ${parceladoConsorcio}
    Total a pagar : (R$ ${entrada} + Prestações : R$ ${consorcioTotal})
    `

    print(resultado_cdc)
    print(resultado_consorcio)
    
    if (consorcioTotal > cdcTotal){
        print(`O modo CDC é mais vantojoso!`)
    }else if (cdcTotal > consorcioTotal){
        print(`O modo consórcio é mais vantajoso!`)
    }else{
        print(`Mesmo valor, nenhum é mais vantajoso`)
    }
}


main()

function ValorAParcelar(valor_carro, perc_fipe){
    const valor = (valor_carro - (89000 * perc_fipe/100))  
    return valor
}
function obterJuros(valor_para_parcelar, juros, prazo){ 
    return (((valor_para_parcelar/prazo) * juros/100)) 
}
function parcela(valor_para_parcelar, valorJuros, prazo){  
    const valorCJuros = ((valor_para_parcelar/prazo) + valorJuros)
    return valorCJuros
}



function obterValorJuros(valor_para_parcelar, taxa_adm){  
    return (valor_para_parcelar * (taxa_adm/100))
}

function obterValorTotal(valor_para_parcelar, jurosConsorcio){   
    return (valor_para_parcelar + jurosConsorcio)
}
function parcelaConsorcio(consorcioTotal,prazo){  
    return (consorcioTotal/prazo)

}