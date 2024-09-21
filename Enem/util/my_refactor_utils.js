// Refatoração Utils
import { meu_push } from "./my_vetores_utils.js"

// meu map
export function mapear(colecao, funcao_transformadora) {
    const resultado = []
    for (let i = 0; i < colecao.length; i++) {
        meu_push(resultado, funcao_transformadora(colecao[i]))
    }
    return resultado
}

// meu filter
export function filtrar(colecao, predicado) {
    const resultado = []
    for (let i = 0; i < colecao.length; i++) {
        if (predicado(colecao[i])) {
            meu_push(resultado, colecao[i])
        }
    }
    return resultado
}

// meu reduce
export function reduzir(colecao, funcao, inicial) {
    let acumulador = inicial !== undefined ? inicial : colecao[0]
    const inicio = inicial !== undefined ? 0 : 1
    for (let i = inicio; i < colecao.length; i++) {
        acumulador = funcao(acumulador, colecao[i])
    }
    return acumulador
}

// buscar sequencial
export function buscar_sequencial(elemento, colecao, criterio = (x, y) => x === y) {
    for (let i = 0; i < colecao.length; i++) {
        if (criterio(colecao[i], elemento)) {
            return i
        }
    }
    return -1
}

// buscar binaria
export function buscar_binaria(elemento, colecao, criterio = (x, y) => x - y) {
    let esquerda = 0
    let direita = colecao.length - 1
    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2)
        const comparacao = criterio(colecao[meio], elemento)
        if (comparacao === 0) return meio
        if (comparacao < 0) esquerda = meio + 1
        else direita = meio - 1
    }
    return -1
}

// bubble sort
export function bubble_sort(colecao, criterio = (a, b) => a - b) {
    const array = [...colecao]
    const n = array.length

    for (let i = 0; i < n - 1; i++) {
        let trocado = false
        for (let j = 0; j < n - 1 - i; j++) {
            if (criterio(array[j], array[j + 1]) > 0) {
                const aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
                trocado = true
            }
        }
        if (!trocado) {
            break
        }
    }
    return array
}

// quick sort
export function quick_sort(colecao, criterio = (a, b) => a - b) {
    if (colecao.length <= 1) return colecao
    const pivot = colecao[0]
    const esquerda = []
    const direita = []
    for (let i = 1; i < colecao.length; i++) {
        if (criterio(colecao[i], pivot) < 0) {
            meu_push(esquerda, colecao[i])
        } else {
            meu_push(direita, colecao[i])
        }
    }
    return [...quick_sort(esquerda, criterio), pivot, ...quick_sort(direita, criterio)]
}
