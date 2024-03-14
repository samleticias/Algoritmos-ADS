import { question } from 'readline-sync'
import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
    const valor_veiculo = get_positive_number('Valor do Bem R$: ')
    const prazo = get_positive_number('Prazo (em meses): ')
    const taxa_adm = get_positive_number('Taxa de Administração (%): ')
    const valor_lance_proposto = get_positive_number('Valor Lance Proposto R$: ')
    const opcao_prazo_ou_parcela = question('Manter prazo ou parcela? ')
    const renda_mensal = get_positive_number('Renda Mensal R$: ')

    const total_taxa_adm = calcular_total_taxa_adm(valor_veiculo,taxa_adm)
    const valor_total = calcular_valor_total(valor_veiculo, total_taxa_adm)
    const valor_parcelas = calcular_valor_parcelas(valor_total, prazo)
    const verificao_renda = verificar_renda(valor_parcelas, renda_mensal)
    const renda_minima = calcular_renda_minima(valor_parcelas)
    const parcelas_ou_prazo_reduzido = nova_parcela_ou_novo_prazo(opcao_prazo_ou_parcela, valor_total, valor_parcelas, prazo, valor_lance_proposto)
    const renda_necessaria_apos_lance = calcular_renda_necessario_apos_lance(opcao_prazo_ou_parcela, parcelas_ou_prazo_reduzido)
    const ultima_parcela = calcular_ultima_parcela(opcao_prazo_ou_parcela, valor_lance_proposto, valor_total, prazo)

    const resultado = exibir_resultados(total_taxa_adm, valor_total, valor_parcelas, parcelas_ou_prazo_reduzido,
    renda_necessaria_apos_lance, opcao_prazo_ou_parcela, verificao_renda, renda_minima, ultima_parcela)

}

function calcular_total_taxa_adm(valor_veiculo,taxa_adm){
    const total_taxa_adm = valor_veiculo*(taxa_adm/100)
    return total_taxa_adm
}

function calcular_valor_total(valor_veiculo, total_taxa_adm){
    const valor_total = valor_veiculo + total_taxa_adm
    return valor_total
}

function calcular_valor_parcelas(valor_total, prazo){
    const valor_parcelas = valor_total / prazo
    return valor_parcelas
}

function verificar_renda(valor_parcelas, renda_mensal){
    if (valor_parcelas > renda_mensal*0.3){
        return 'insuficiente'
    } else {
        return 'suficiente'
    }
    
}

function calcular_renda_minima(valor_parcelas){
    const renda_suficiente = valor_parcelas / 0.3
    return renda_suficiente
}

function nova_parcela_ou_novo_prazo(opcao_prazo_ou_parcela, valor_total, valor_parcelas, prazo, valor_lance_proposto){
    if (opcao_prazo_ou_parcela == 'prazo'){
        const novo_valor_total = valor_total - valor_lance_proposto
        const novo_valor_parcelas = novo_valor_total // prazo
        return novo_valor_parcelas
    }
    if (opcao_prazo_ou_parcela == 'parcelas'){
        const novo_prazo = prazo - valor_lance_proposto // valor_parcelas
        return novo_prazo
    }
}

function calcular_renda_necessario_apos_lance(opcao_prazo_ou_parcela, parcelas_ou_prazo_reduzido){
    if (opcao_prazo_ou_parcela == 'prazo'){
        const nova_renda_necessaria = parcelas_ou_prazo_reduzido / 0.3
        return `A renda mínima necessária para resgate após o lance é de R$${nova_renda_necessaria.toFixed(2)}`
    } else{
        return 'A renda mínima necessária continua a mesma'
    }
}

function calcular_ultima_parcela(opcao_prazo_ou_parcela, valor_lance_proposto, valor_total, prazo){
    if (opcao_prazo_ou_parcela == 'prazo'){
        const novo_valor_total = valor_total - valor_lance_proposto
        const novo_valor_parcelas = novo_valor_total // prazo
        const novo_valor_ultima_parcela = novo_valor_parcelas + (novo_valor_total % prazo)
        return novo_valor_ultima_parcela
    }
}

function exibir_resultados(total_taxa_adm, valor_total, valor_parcelas, parcelas_ou_prazo_reduzido,
    renda_necessaria_apos_lance, opcao_prazo_ou_parcela, verificao_renda, renda_minima, ultima_parcela){

print (`
***** CONSÓRCIO *****
O valor das parcelas será de R$ ${valor_parcelas.toFixed(2)}
O total a ser pago será de R$ ${valor_total}
O valor total da taxa de adminstração será de R$ ${total_taxa_adm}
Sua renda é ${verificao_renda} para o resgate do veículo, ela deve ser no mínimo R$ ${renda_minima.toFixed(2)}
`)

if (verificao_renda == 'suficiente'){
print('-----SIMULAÇÃO APÓS LANCE-----')
}
if (opcao_prazo_ou_parcela == 'prazo'){
print(renda_necessaria_apos_lance)
print(
`O novo valor das parcelas será de R$ ${parcelas_ou_prazo_reduzido}
A última parcela sofrerá uma alteração, passando a ser: R$ ${ultima_parcela}
`)} else{
print(renda_necessaria_apos_lance)
print(`O novo prazo será de ${parcelas_ou_prazo_reduzido} meses`)
print('----------------------------------------------------------------------------------------------------')
}
    }

main()