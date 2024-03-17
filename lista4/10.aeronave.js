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
import { get_number, print } from '../utils/io_utils.js'

function main() {
    const peso_decolagem_aeronave = 500000

    // Lendo os dados dos containers
    const numero_containers = get_number('Digite o número de containers: ')
    const pesos_containers = []
    for (let i = 0; i < numero_containers; i++) {
        const peso_container = get_number(`Digite o peso do container ${i + 1} (em kg): `)
        pesos_containers.push(peso_container)
    }

    // peso da carga
    const peso_carga = calcular_peso_carga(pesos_containers)

    // Lendo os dados dos passageiros
    let quantidade_passageiros = 0
    let total_volume_bagagem = 0
    while (true) {
        const numero_bilhete = get_number('Digite o número do bilhete do passageiro (ou 0 para sair): ')
        if (numero_bilhete === 0) {
            break
        }
        const quantidade_bagagens = get_number('Digite a quantidade de bagagens do passageiro: ')
        quantidade_passageiros++
        total_volume_bagagem += quantidade_bagagens * 10 // Cada volume de bagagem tem o peso estimado de 10kg
    }

    // peso dos passageiros
    const peso_passageiros = quantidade_passageiros * 70 // Cada passageiro tem o peso estimado de 70kg

    // quantidade de combustível
    const quantidade_combustivel = get_number('Digite a quantidade de combustível (em litros): ')

    // peso do combustível
    const peso_combustivel = calcular_peso_combustivel(quantidade_combustivel)

    // Verificando se a decolagem é autorizada
    const decolagem_autorizada = verificar_decolagem_autorizada(peso_decolagem_aeronave, peso_carga, peso_passageiros, peso_combustivel)

    // Exibindo os resultados
    print('\n*************** DECOLAGEM ***************')
    print('-----------------------------------------')
    print(`Quantidade de passageiros: ${quantidade_passageiros} passageiros`)
    print(`Quantidade total de volume de bagagem: ${total_volume_bagagem} Kg`)
    print(`Peso dos passageiros: ${peso_passageiros} Kg`)
    print(`Peso da carga: ${peso_carga} Kg`)
    print(`Quantidade possível de combustível: ${quantidade_combustivel} L`)
    print(`Peso do combustível: ${peso_combustivel} Kg`)
    print(`Status da Decolagem: ${decolagem_autorizada}`)
    print('-----------------------------------------')
}

function calcular_peso_combustivel(quantidade_combustivel) {
    return quantidade_combustivel * 1.5
}

function verificar_decolagem_autorizada(peso_decolagem_aeronave, peso_carga, peso_passageiros, peso_combustivel, quantidade_combustivel) {
    // O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos passageiros;
    const peso_decolagem_total = peso_combustivel + peso_carga + peso_passageiros

    // A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
    if (quantidade_combustivel >= 10000 && peso_decolagem_total <= peso_decolagem_aeronave) {
        return 'DECOLAGEM AUTORIZADA'
    } else {
        return 'DECOLAGEM NEGADA'
    }
}

function calcular_peso_carga(pesos_containers) {
    // O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
    return pesos_containers.reduce((total, peso) => total + peso, 0)
}

main()
