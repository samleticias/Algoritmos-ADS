import { carregar_arquivo, get_number, get_number_in_range, get_random_number } from "./io_utils.js"
import { eh_numero_positivo, get_size, meu_push } from "./vetor_utils.js"

// funcao para preencher todas as posicoes do vetor com o valor padrao, retornando vetor resetado
export function resetar_vetor(vetor, valor_padrao){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }
    return vetor
}

// funcao para obter maior valor do vetor
export function obter_maior_valor(vetor){
    let maior_valor = -999999999999999

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior_valor){
            maior_valor = vetor[i]
        }
    }
    return maior_valor
}

// funcao para obter menor valor do vetor
export function obter_menor_valor(vetor){
    let menor_valor = 999999999999999

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menor_valor){
            menor_valor = vetor[i]
        }
    }
    return menor_valor 
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

// funcao para obter somatorio de todos os valores do vetor, retornando a soma total
export function obter_somatorio_valores(vetor){
    let somatorio = 0

    for (let i = 0; i < vetor.length; i++){
        somatorio = somatorio + vetor[i]
    }
    return somatorio
}

// funcao para obter media dos valores do vetor, retornando a media 
export function obter_media_valores(vetor){
    let qtd_itens = get_size(vetor)
    let somatorio = obter_somatorio_valores(vetor)
    let media = somatorio / qtd_itens

    return media
}

// funcao para obter a quantidade de valores positivos no vetor, retornando a contagem
export function conta_quantidade_valores_positivos(vetor){
    let quantidade = 0

    for (let i = 0; i < vetor.length; i++){
        if (eh_numero_positivo(vetor[i])){
            quantidade = quantidade + 1
        }
    }
    return quantidade
}

// funcao para listar valores positivos do vetor
export function mostra_valores_positivos(vetor){
    let valores_positivos = []

    for (let i = 0; i < vetor.length; i++){
        if (eh_numero_positivo(vetor[i])){
            meu_push(valores_positivos, vetor[i])
        }
    }
    return valores_positivos
}

// funcao para obter a quantidade de valores negativos no vetor, retornando a contagem
export function conta_quantidade_valores_negativos(vetor){
    let quantidade = 0

    for (let i = 0; i < vetor.length; i++){
        if (!eh_numero_positivo(vetor[i])){
            quantidade = quantidade + 1
        }
    }
    return quantidade
}

// funcao para listar valores negativos do vetor
export function mostra_valores_negativos(vetor){
    let valores_negativos = []

    for (let i = 0; i < vetor.length; i++){
        if (!eh_numero_positivo(vetor[i])){
            meu_push(valores_negativos, vetor[i])
        }
    }
    return valores_negativos
}

// funcao para multiplicar cada elemento do vetor por um valor informado pelo usuario, 
// retornando vetor com elementos multiplicados
export function multiplicar_valores(vetor, valor){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        meu_push(novo_vetor, vetor[i] * valor)
    }
    return novo_vetor
}

// funcao para elevar cada elemento do vetor a um expoente informado pelo usuario,
// retornando vetor com elementos elevados ao expoente
export function exponencia_elementos(vetor, expoente){
    let novo_vetor = []

    for (let i = 0; i < vetor.length; i++){
        meu_push(novo_vetor, Math.pow(vetor[i], expoente))
    }
    return novo_vetor
}

// funcao para reduzir numero pela fracao ex: 60 * 1/2 = 30
export function reduzir_pela_fracao(numero, numerador, denominador) {
    return numero * (numerador/denominador)
}

// funcao para reduzir cada elemento do vetor à fração informada pelo usuario (num/den)
// retornando vetor com elementos reduzidos
export function reduzir_todos_elementos(vetor, numerador, denominador) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = reduzir_pela_fracao(vetor[i], numerador, denominador)
    }
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

// funcao para ordenar valores de um vetor, retornando vetor com valores em ordem crescente
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

// funcao para adicionar valores ao vetor
// pede a quantidade de elementos que deseja adicionar e solicita cada valor, adicionando-os ao vetor
// retorna vetor acrescentando os elementos novos
export function adiciona_valores(vetor, quantidade_valores){
    let contador = 0

    while (contador < quantidade_valores){
        let numero = get_number(`Número ${contador + 1}: `)
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
    let novo_valor = get_number('Novo valor: ')
    vetor[posicao] = novo_valor
    return vetor
}


