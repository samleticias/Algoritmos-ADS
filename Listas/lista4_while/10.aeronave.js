/*
Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.
*/
import { get_number, get_number_min, get_positive_number, print } from '../utils/io_utils.js'


function main(){
  // Carga
  const qtd_containers = get_number_min('Qtd Containers: ', 0)
  const peso_carga = computar_carga(qtd_containers)

  // Passageiros
  let contador_passageiros = 0
  let contador_bagagens = 0
  let bilhete = get_number('Bilhete: ')

  while (bilhete !== 0){
    contador_passageiros++
    const bagagens = get_number_min('Qtd de Bagagens: ', 0)
    // trabalho
    contador_bagagens += bagagens

    bilhete = get_number('Bilhete: ')
  }

  const peso_passageiros = (contador_passageiros * 70) + (contador_bagagens * 10)

  const total_peso_fora_combustivel = peso_passageiros + peso_carga
  const combustivel_possivel_kg = 500_000 - total_peso_fora_combustivel
  const combustivel_possivel_litros = combustivel_possivel_kg / 1.5
  const decolagem_autorizada = combustivel_possivel_litros >= 10_000 ? 'SIM' : 'NÃO'

  const resultado = `
  >>>>>>>>> AVIAO <<<<<<<
  - Passageiros Embarcados: ${contador_passageiros}
  - total de volume de bagagem: ${contador_bagagens}
  - Peso dos Passageiros: ${peso_passageiros.toFixed(2)}kg
  - Peso da carga: ${peso_carga.toFixed(2)}kg
  - Decolagem Autorizada? --> ${decolagem_autorizada}
  `

  print(resultado)

}


function computar_carga(quantidade){
  let qtd_containers_lidos = 0
  let peso_total = 0

  while (qtd_containers_lidos < quantidade){

    const peso = get_positive_number('Peso Container: ')
    peso_total = peso_total + peso

    qtd_containers_lidos += 1
  }

  return peso_total
}

main()