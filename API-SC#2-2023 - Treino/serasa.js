import { get_number, print } from '../utils/io_utils.js'

function main(){

  const n_valores = get_number('Digite a quantidade de valores: ')
  let valor = get_number('Valor (entre 0 e 100): ')
  let contador_valores = 0

  while (valor !== 0){
    if (valor > 0 && valor <= 100){
      contador_valores++

      valor = get_number('Valor (entre 0 e 100): ')

      // Score 1 = valor criterio A * 2.6
      const score_1 = valor * 3.6

      // Score 2 = valor criterio A * 6.2
      const score_2 = valor * 7.2

      print(`Avaliação do valor ${valor}:`)
      print(`Score 1: ${score_1.toFixed(2)} - ${obter_perfil_cliente_score_1(score_1)}`)
      print(`Score 2: ${score_2.toFixed(2)} - ${obter_perfil_cliente_score_2(score_2)}`)

    }
  }

  //Score 1.0: valor - categoria
  //Score 2.0: valor - categoria
}

function obter_perfil_cliente_score_1(score_1){
  if (score_1 < 400){
    return 'Baixo'
  } else if (score_1 < 600){
    return 'Regular'
  } else if (score_1 < 800){
    return 'Bom'
  } else {
    return 'Muito bom'
  }
}

function obter_perfil_cliente_score_2(score_2){
  if (score_2 < 300){
    return 'Baixo'
  } else if (score_2 <= 500){
    return 'Regular'
  } else if (score_2 <= 700){
    return 'Bom'
  } else {
    return 'Muito bom'
  }
}

main()