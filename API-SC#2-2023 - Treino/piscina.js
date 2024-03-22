import { get_number, print } from '../utils/io_utils.js'

function main(){
    /*
    Calcule a capacidade máxima da piscina pedindo ao usuário as
    dimensões de largura, comprimento e profundidade (em cm). 1 litro é
    igual a 1000 cm3
    . Uma piscina por exemplo de capacidade →
    L=100cm x C=100cm x P=100cm → 1000 litros, e deve ser cheia até
    850 litros apenas.
    */
   const largura = get_number('Largura (em cm): ')
   const comprimento = get_number('Comprimento (em cm): ')
   const profundidade = get_number('Profundidade (em cm): ')
   const preco_por_parte_inteira = get_number('Valor a ser pago por cada 1000 litros R$: ')

   const volume_piscina = largura * comprimento * profundidade
   const capacidade_piscina_litros = obter_capacidade_piscina_em_litros(volume_piscina)
   const capacidade_recomendada_litros = obter_capacidade_recomendada_litros(capacidade_piscina_litros)
   const custo_encher_piscina = obter_valor_agua_paga(capacidade_recomendada_litros, preco_por_parte_inteira)
   const custo_total_reposicao_litros = obter_nivel_ideal_agua(capacidade_recomendada_litros)

}

function obter_capacidade_piscina_em_litros(volume_piscina){
    // 1 litro é igual a 1000 cm3
    const quantidade_litros_piscina = volume_piscina / 1000
    return quantidade_litros_piscina
}

function obter_capacidade_recomendada_litros(capacidade_piscina_litros){
    // deixar o nível da água com no máximo 85% da capacidade.
    return capacidade_piscina_litros * 0.85
}

function obter_valor_agua_paga(capacidade_recomendada_litros, preco_por_parte_inteira){
   const parte_inteira = Math.floor(capacidade_recomendada_litros / 1000)
   if (capacidade_recomendada_litros % 1000 !== 0){
        parte_inteira += 1
   }
    const custo_total = parte_inteira * preco_por_parte_inteira
    return custo_total
}

function obter_nivel_ideal_agua(capacidade_recomendada_litros){
    /*
    Mensalmente é necessário repor 10% da água devido a banho e
    evaporação, informe ao usuário também o gasto mensal para manter
    a piscina no nível ideal.
    */
   let parte_inteira_litros_reposicao_mensal = 0
   const reposicao_mensal_agua = capacidade_recomendada_litros * 0.1 
   if (reposicao_mensal_agua % 1000 != 0){
    parte_inteira_litros_reposicao_mensal += 1
   }
   const custo_total_reposicao = parte_inteira_litros_reposicao_mensal * parte_inteira_litros_reposicao_mensal
   return custo_total_reposicao
}

main()