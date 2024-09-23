import { question } from 'readline-sync'
import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
    const valor_aula = get_positive_number('Valor da hora: ')
    const nome = question('Nome do professor: ')
    const horas_semanais = get_positive_number('Horas semanais: ')
    const qualificacao = question('Qualificação (E, M ou D): ')
    const experiencia = get_positive_number('Tempo de experiência (em meses): ')
    const filhos = get_positive_number('Quantidade de filhos (até 6 anos): ')
    const plano_de_saude = get_positive_number('Valor do plano de saúde R$: ')

    const valor_por_qualidade = verificar_qualificacao(qualificacao, valor_aula)
    const valor_por_experiencia = verificar_experiencia(experiencia, valor_por_qualidade)
    const valor_semanal = valor_por_experiencia * horas_semanais
    const valor_mensal = 4.5 * valor_semanal

    const saude = obter_plano_de_saude(plano_de_saude)
    const valor_creche = calcular_valor_creche(filhos)
    const aux_combustivel = obter_auxilio_combustivel(horas_semanais)
    const previdencia_social = calcular_previdencia_social(valor_mensal)
    const imposto_renda = calcular_imposto_renda(valor_mensal)

    const salario_bruto = (valor_mensal + valor_creche + aux_combustivel + saude)
    const salario_liquido = salario_bruto - (imposto_renda + previdencia_social)

    const contracheque = `
    Nome: ${nome}
    Valor por hora: R$ ${valor_aula}
    Salário semanal: R$ ${valor_semanal}
    ---GANHOS---
    Salário Base Mensal: R$ ${valor_mensal}
    Auxilio creche: ${valor_creche}
    Ressarcimento saúde: R$ ${saude}
    Auxilio combustível: R$ ${aux_combustivel}
    Salário Bruto: R$ ${salario_bruto}
    ---Descontos---
    Previdência: R$ ${previdencia_social}
    Imposto de renda: R$ ${imposto_renda.toFixed(2)}
    Salário Líquido: R$ ${salario_liquido}
    `
    print(contracheque)

}

function verificar_qualificacao(qualificacao, valor_aula){
    if (qualificacao === 'E'){
        return (valor_aula * 1.2)
    }else if (qualificacao === 'M'){
        return (valor_aula * 1.3)
    }
    return (valor_aula * 1.5)
}

function verificar_experiencia(experiencia, valor_por_qualidade){
    if (experiencia < 6){
        return valor_por_qualidade
    } else {
        return ((1.05 * valor_por_qualidade) * experiencia/12)
    }
}

function calcular_valor_creche(filhos){
    // Auxílio Creche de R$ 700 por cada filho menor de 6 anos.
    const creche = 700 * filhos
    return creche 
}

function obter_plano_de_saude(plano_de_saude){
    if (plano_de_saude * 0.5 >= 500){
        return (plano_de_saude - 500)
    } else {
        return (plano_de_saude/2)
    }
}

function obter_auxilio_combustivel(horas_semanais){
    // Auxílio Combustível de R$ 30 para cada 8 aulas semanais
    //  16 aulas por semana => R$ 60 de Auxílio Combustível
    const aux_mensal = Math.floor((horas_semanais) / 8 * 30)
    return aux_mensal
    
}

function calcular_previdencia_social(valor_mensal){
    // Até um salário mínimo(R$ 1302,00) → 7,5%
    //Acima de R$ 1.302 até R$ 2500 → 9%
    //Acima de R$ 2.500 até R$ 3900 → 12%
    //Acima de R$ 3900 até R$ 7500 → 14%
    //Acima de R$ 7500 → 16%
    if (valor_mensal < 1302){
        return valor_mensal * 0.075
    } else if (valor_mensal < 2500){
        return valor_mensal * 0.09
    } else if (valor_mensal < 3900){
        return valor_mensal * 0.12
    } else if (valor_mensal < 7500){
        return valor_mensal * 0.14
    } else {
        return valor_mensal * 0.16
    }

}

function calcular_imposto_renda(valor_mensal){
    if (valor_mensal <= 5000){
        return 0
    } else {
        return valor_mensal * 0.275
    }
}

main()