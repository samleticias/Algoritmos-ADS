/*
Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){

    let total_entrevistados = 0
    let soma_quantidade_mulheres = 0
    let soma_quantidade_homens = 0
    let soma_idade_homens = 0
    let soma_idade_mulheres = 0
    let quantidade_solteiros = 0
    let quantidade_solteiras = 0
    let quantidade_divorciadas_acima_30 = 0

    while (total_entrevistados < 100 || idade !== -1) {
        const idade = get_number('Digite a idade (ou -1 para sair): ') 

        if (idade === -1 ){
            break
        }

        const sexo = get_number_intervalo('Digite seu gênero (1=Masculino, 2=Feminino): ', 1, 2) 
        const estado_civil = get_number_intervalo('Digite seu estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo): ', 1, 4) // [1, 4]

        if (sexo === 1 && estado_civil === 2) { // homens solteiros
            quantidade_solteiros++
        }


        if (sexo === 2 && estado_civil === 2) { // mulheres solteiras
            quantidade_solteiras++
        }

        if (idade > 30 && sexo === 2 && estado_civil === 3){ // mulheres divorciadas acima de 30 anos
            quantidade_divorciadas_acima_30++
        }
        

        if(sexo === 2){ // feminino
            soma_quantidade_mulheres++
            soma_idade_mulheres += idade
        }
        else if(sexo === 1){ // masculino
            soma_quantidade_homens++
            soma_idade_homens += idade
        } 
        

        total_entrevistados++
    }

    // média das idades das mulheres
    const media_idades_mulheres = soma_idade_mulheres / soma_quantidade_mulheres

    // média das idades dos homens
    const media_idade_homens = soma_idade_homens / soma_quantidade_homens

    // percentual de homens solteiros;
    const percentual_homens_solteiros = (quantidade_solteiros / total_entrevistados) * 100

    // percentual de mulheres solteiras
    const percentual_mulheres_solteiras = (quantidade_solteiras / total_entrevistados) * 100

    // quantidade de mulheres divorciadas acima de 30 anos
    const quantidade_divorciadas = quantidade_divorciadas_acima_30


    print('************ ANÁLISE DO GRUPO ************ ')
    print('--------------------------------------------------')
    print(`Média das idades dos homens: ${media_idade_homens.toFixed(2)}`)
    print(`Média das idades das mulheres: ${media_idades_mulheres.toFixed(2)}`)
    print(`Percentual de homens solteiros: ${percentual_homens_solteiros.toFixed(2)}%`)
    print(`Percentual de mulheres solteiras: ${percentual_mulheres_solteiras.toFixed(2)}%`)
    print(`Quantidade de mulheres divorciadas acima dos 30 anos: ${quantidade_divorciadas}`)
    print(`Total de entrevistados: ${total_entrevistados}`)
}

function get_number_intervalo(label, inicio_intervalo, fim_intervalo){
    const intervalo = `[${inicio_intervalo}, ${fim_intervalo}]`
    let numero = get_number(label + `(entre o intervalo ${intervalo})\n: `)
    while(numero < inicio_intervalo || numero > fim_intervalo){
        numero = get_number(`Número inválido! Insira um entre o intervalo\n:  ${intervalo}`)
    }
    return numero
}

main()