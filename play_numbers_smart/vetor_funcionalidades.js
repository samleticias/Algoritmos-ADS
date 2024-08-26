import {get_number, get_number_in_range, get_random_number} from './io_utils.js'
import { get_size, meu_filter, meu_map, meu_reduce , meu_push, eh_numero_positivo} from './vetor_utils.js'

// Map
// funcao para resetar valores de um vetor
export function resetar_vetor(vetor, valor_padrao){
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return
    }
    vetor = meu_map(vetor,(elemento) => elemento = valor_padrao)
    return vetor
}

// Reduce: extrair informação de todos os valores -> maior valor
// funcao para obter maior valor do vetor
export function obter_maior_valor(vetor){
    let maior_valor = meu_reduce(vetor, (elemento, acumulador) => elemento > acumulador ? elemento : acumulador, vetor[0])
    return maior_valor
}

// Reduce: extrair informação de todos os valores -> menor valor
// funcao para obter menor valor do vetor
export function obter_menor_valor(vetor){
    let menor_valor = meu_reduce(vetor, (elemento, acumulador) => elemento < acumulador ? elemento : acumulador, vetor[0])
    return menor_valor
}

// Reduce
// funcao para obter o somatorio de todos os valores do vetor
export function obter_somatorio_valores(vetor){
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return
    }
    let somatorio = meu_reduce(vetor, (elemento, acumulador) => elemento + acumulador, 0)
    return somatorio
}

// Reduce
// funcao para obter a media de todos os valores do vetor
export function obter_media_valores(vetor){
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return
    }
    let somatorio = meu_reduce(vetor, (elemento, acumulador) => elemento + acumulador, 0)
    let tamanho = get_size(vetor)
    let media = somatorio / tamanho
    return media
}

// Filter
// funcao para exibir os valores positivos do vetor
export function mostra_valores_positivos(vetor){
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return
    }
    const vetor_positivos = meu_filter(vetor, elemento => elemento >= 0)
    return vetor_positivos
}

// Filter
// funcao para exibir os valores negativos do vetor
export function mostra_valores_negativos(vetor){
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return 
    }
    const vetor_negativos = meu_filter(vetor, elemento => elemento < 0)
    return vetor_negativos
}

// funcao para obter índice do maior valor do vetor, retornando a posicao desse elemento no vetor
export function obter_posicao_maior_valor(vetor){
    let maior_valor = -999999999999999

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior_valor){
            maior_valor = vetor[i]
        }
    }
    let posicao = vetor.indexOf(maior_valor)
    return posicao
}

// funcao para obter índice do menor valor do vetor, retornando a posicao desse elemento no vetor
export function obter_posicao_menor_valor(vetor){
    let menor_valor = 999999999999999

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menor_valor){
            menor_valor = vetor[i]
        }
    }
    let posicao = vetor.indexOf(menor_valor)
    return posicao 
}

// funcao para inicializar vetor com tamanho informado pelo usuario
export function gerar_novo_vetor(tamanho) {
    let lista = []
    for (let i = 0; i < tamanho; i++) {
        lista.push('')
    }
    return lista
}

// funcao para preencher vetor com valores aleatorios numa faixa de valores minimo e maximo  
export function preencher_vetor_automaticamente(vetor, valor_min, valor_max){
    for (let i = 0; i < vetor.length; i++){
        let numero_aleatorio = get_random_number(valor_min, valor_max + 1)
        vetor[i] = numero_aleatorio
    }
    return vetor
}

// funcao para preencher vetor manualmente, inserindo cada elemento na posicao 
// que é incrementada pelo contador dependendo do tamanho do vetor
export function preencher_vetor(vetor){
    let contador = 0

    while (contador < vetor.length){
        let numero = get_number(`${contador} -> `)
        vetor[contador] = numero
        contador = contador + 1
    }
    return vetor
}

// funcao para preencher vetor manualmente numa faixa de valores mínimo e máximo
export function preencher_vetor_min_max(vetor, valor_min, valor_max){
    let contador = 0

    while (contador < vetor.length){
        let numero = get_number_in_range(`${contador} -> `, valor_min, valor_max)
        vetor[contador] = numero
        contador = contador + 1
    }
    return vetor
}

// Map
// funcao para multiplicar cada elemento do vetor por um valor informado pelo usuario, 
// retornando vetor com elementos multiplicados
export function multiplicar_valores(vetor, valor){
    if (get_size(vetor) < 1){
        print("\nVetor vazio\n!")
        return
    }
    vetor = meu_map(vetor, elemento => elemento * valor)
    return vetor
}

// Map
// funcao para elevar cada elemento do vetor a um expoente informado pelo usuario,
// retornando vetor com elementos elevados ao expoente
export function exponencia_elementos(vetor, expoente){
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return
    }
    vetor = meu_map(vetor, elemento => Math.pow(elemento, expoente))
    return vetor
}

// Map
// funcao para reduzir cada elemento do vetor à fração informada pelo usuario (num/den)
// retornando vetor com elementos reduzidos
export function reduzir_todos_elementos(vetor, numerador, denominador) {
    if (get_size(vetor) < 1){
        print('\nVetor vazio!\n')
        return
    }
    vetor = meu_map(vetor, elemento => elemento * numerador/denominador)
    return vetor
}

// funcao para percorrer os elementos do vetor e, se o valor for negativo, 
// substitui o valor por um numero gerado aleatoriamente
// retorna vetor com apenas os valores negativos modificados por numeros aleatorios, 
// pois a condição para mudar é o numero nao ser positivo
export function substituir_valores_negativos_por_aleatorios(vetor, valor_min, valor_max){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        if (!eh_numero_positivo(vetor[i])){
            meu_push(novo_vetor, vetor[i] = get_random_number(valor_min, valor_max))
        } else {
            meu_push(novo_vetor, vetor[i])
        }
    }
    return novo_vetor
}

// funcao para adicionar valores ao vetor
// pede a quantidade de elementos que deseja adicionar e solicita cada valor, adicionando-os ao vetor
// retorna vetor acrescentando os elementos novos
export function adiciona_valores(vetor, quantidade_valores){
    let contador = 0

    while (contador < quantidade_valores){
        let numero = get_number(`\nNúmero ${contador + 1}: `)
        meu_push(vetor, numero)
        contador++
    }
    return vetor
}

// funcao para remover valor informado do vetor, retornando vetor com o valor exato removido
export function remove_valor(vetor, valor){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] !== valor){
            meu_push(novo_vetor, vetor[i])
        }
    }
    return novo_vetor
}

// funcao para remover valor do vetor informando o índice, retornando vetor com valor removido
export function remove_valor_por_posicao(vetor, posicao){
    let novo_vetor = []

    if (posicao < 0 || posicao >= vetor.length) {
        console.log('\nPosição inválida!\n')
        return vetor
    }

    for (let i = 0; i < vetor.length; i++){
        if (i !== posicao){
            meu_push(novo_vetor, vetor[i])
        }
    }
    return novo_vetor
}

// funcao para acessar e editar um elemento do vetor informando o índice, retornando vetor com o valor modificado
export function atualizar_valor(vetor, posicao) {
    if (posicao < 0 || posicao >= vetor.length) {
        console.log('\nPosição inválida!\n')
        return vetor
    }
    let novo_valor = get_number('\nNovo valor:\n')
    vetor[posicao] = novo_valor
    return vetor
}


