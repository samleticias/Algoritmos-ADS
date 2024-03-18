/*
Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const distancia_total = 600
    const tanque_inicio_litros = 50
    let quantidade_litros_consumidos = 0
    let distancia_percorrida = 0

    while (true) {
        const distancia_medida = get_number('Digite a distância percorrida desde a última medição: ')

        const litros_consumidos = get_number('Digite a quantidade de litros consumidos para percorrer a distância indicada: ')

        distancia_percorrida += distancia_medida
        quantidade_litros_consumidos += litros_consumidos

        if (distancia_percorrida >= distancia_total) {
            print('O carro chegou ao seu destino')
            break
        }

        if (quantidade_litros_consumidos >= tanque_inicio_litros) {
            print('O carro parou antes de chegar por falta de combustível')
            break
        }
    }

    // consumo em km/l do carro
    const consumo_kml = distancia_percorrida / quantidade_litros_consumidos

    print(`Consumo do veículo: ${consumo_kml.toFixed(2)} Km/L`)
}

main()
