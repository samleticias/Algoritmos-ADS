// meu size
export function get_size(vetor){
    let tamanho = 0

    for (let i = 0; i < vetor.length; i++){
        tamanho = tamanho + 1
    }
    return tamanho
}

export function eh_numero_positivo(numero){
    return numero >= 0
}

export function meu_push(lista, elemento) {
    lista.push(elemento)
    return lista
}


