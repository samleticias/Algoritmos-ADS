// funcao para obter tamanho do vetor
export function get_size(vetor){
    let tamanho = 0
    for (let elemento of vetor){
        tamanho = tamanho + 1
    }
    return tamanho
}

// funcao para adicionar elemento ao vetor
export function meu_push(lista, elemento) {
    lista.push(elemento)
    return lista
}

// funcao para gerar vetor vazio de tamanho informado
export function gerar_vetor(tamanho){
    let vetor = []
    for (let i = 0; i < tamanho; i++){
        meu_push(vetor, ' ')
    }
    return vetor
}

// funcao para exibir elementos do vetor
export function exibe_elementos_vetor(vetor, texto){
    console.log(texto)
    let elementos_str = "["
    for (let index in vetor){
        if (index == get_size(vetor) -1){
            elementos_str += ` ${vetor[index]}`
            break
        }
        elementos_str += ` ${vetor[index]},`
    }
    elementos_str += " ]"
    console.log(elementos_str)
}