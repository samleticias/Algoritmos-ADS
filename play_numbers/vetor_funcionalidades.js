import { get_number, get_random_number } from "./io_utils.js"
import { eh_numero_positivo, get_size, meu_push } from "./vetor_utils.js"

export function resetar_vetor(vetor, valor_padrao){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }
    return vetor
}

export function obter_maior_valor(vetor){
    let maior_valor = -999999999999999

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior_valor){
            maior_valor = vetor[i]
        }
    }
    return maior_valor
}

export function obter_menor_valor(vetor){
    let menor_valor = 999999999999999

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menor_valor){
            menor_valor = vetor[i]
        }
    }
    return menor_valor 
}

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

export function gerar_novo_vetor(tamanho) {
    let lista = []
    for (let i = 0; i < tamanho; i++) {
        lista.push('')
    }
    return lista
}
   
export function preencher_vetor_automaticamente(vetor, valor_min, valor_max){
    for (let i = 0; i < vetor.length; i++){
        let numero_aleatorio = get_random_number(valor_min, valor_max + 1)
        vetor[i] = numero_aleatorio
    }
    return vetor
}

export function preencher_vetor(vetor){
    let contador = 0

    while (contador < vetor.length){
        let numero = get_number(`${contador} -> `)
        vetor[contador] = numero
        contador = contador + 1
    }
    return vetor
}

export function obter_somatorio_valores(vetor){
    let somatorio = 0

    for (let i = 0; i < vetor.length; i++){
        somatorio = somatorio + vetor[i]
    }
    return somatorio
}

export function obter_media_valores(vetor){
    let qtd_itens = get_size(vetor)
    let somatorio = obter_somatorio_valores(vetor)
    let media = somatorio / qtd_itens

    return media
}

export function conta_quantidade_valores_positivos(vetor){
    let quantidade = 0

    for (let i = 0; i < vetor.length; i++){
        if (eh_numero_positivo(vetor[i])){
            quantidade = quantidade + 1
        }
    }
    return quantidade
}

export function mostra_valores_positivos(vetor){
    let valores_positivos = []

    for (let i = 0; i < vetor.length; i++){
        if (eh_numero_positivo(vetor[i])){
            meu_push(valores_positivos, vetor[i])
        }
    }
    return valores_positivos
}

export function conta_quantidade_valores_negativos(vetor){
    let quantidade = 0

    for (let i = 0; i < vetor.length; i++){
        if (!eh_numero_positivo(vetor[i])){
            quantidade = quantidade + 1
        }
    }
    return quantidade
}

export function mostra_valores_negativos(vetor){
    let valores_negativos = []

    for (let i = 0; i < vetor.length; i++){
        if (!eh_numero_positivo(vetor[i])){
            meu_push(valores_negativos, vetor[i])
        }
    }
    return valores_negativos
}

export function multiplicar_valores(vetor, valor){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        meu_push(novo_vetor, vetor[i] * valor)
    }
    return novo_vetor
}

export function exponencia_elementos(vetor, expoente){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        meu_push(novo_vetor, Math.pow(vetor[i], expoente))
    }
    return novo_vetor
}

export function reduzir_pela_fracao(numero, numerador, denominador) {
    return numero * (numerador/denominador)
}

export function reduzir_todos_elementos(vetor, numerador, denominador) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = reduzir_pela_fracao(vetor[i], numerador, denominador)
    }
    return vetor
}

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

export function ordenar_valores_sort(vetor) {
    const n = vetor.length
    for (let i = 0; i < n - 1; i++) {
        let min_index = i
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[min_index]) {
                min_index = j
            }
        }
        [vetor[i], vetor[min_index]] = [vetor[min_index], vetor[i]]
    }
    return vetor
}

// export function embaralhar_valores(vetor) {
//     if (!Array.isArray(vetor) || vetor.length <= 1) {
//         return vetor
//     }

//     for (let i = vetor.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1))
        
//         [vetor[i], vetor[j]] = [vetor[j], vetor[i]]
//     }
//     return vetor
// }

export function adiciona_valores(vetor, quantidade_valores){
    let contador = 0

    while (contador < quantidade_valores){
        let numero = get_number(`Número ${contador + 1}: `)
        meu_push(vetor, numero)
        contador++
    }
    return vetor
}

export function remove_valor(vetor, valor){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] !== valor){
            meu_push(novo_vetor, vetor[i])
        }
    }
    return novo_vetor
}

export function remove_valor_por_posicao(vetor, posicao){
    
}