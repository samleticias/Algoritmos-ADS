export function meu_push(lista, elemento){
    lista.push(elemento)
    return lista
}

export function meu_join(lista, joinador) {
    if (meu_length(lista) === 0) return ''
    let texto = lista[0]
    for (let i = 1; i < meu_length(lista); i++) {
        texto += joinador + lista[i]
    }
    return texto
}

export function exibe_elementos_vetor(vetor, texto){
    if (meu_length(vetor) < 1){
        console.log('\nVetor vazio!\n')
        return
    }
    console.log(texto)
    let elementos_str = "["
    for (let index in vetor){
        if (index == meu_length(vetor) -1){
            elementos_str += ` ${vetor[index]}`
            break
        }
        elementos_str += ` ${vetor[index]},`
    }
    elementos_str += " ]"
    console.log(elementos_str)
}

export function meu_length(texto){
    let tamanho = 0
    for (let elemento of texto){
        tamanho= tamanho + 1
    }
    return tamanho
}

export function mapear(colecao, funcao_transformadora){
    for (let i = 0; i < meu_length(colecao); i++){
        colecao[i] = funcao_transformadora(colecao[i])
    }
    return colecao
}

export function meu_split(texto, splitador) {
    let lista = []
    let inicio = 0

    for (let i = 0; i < meu_length(texto); i++) {
        if (texto[i] === splitador) {
            if (i > inicio) {
                meu_push(lista, texto.substring(inicio, i))
            }
            inicio = i + 1
        }
    }
    if (inicio < meu_length(texto)) {
        meu_push(lista, texto.substring(inicio))
    }
    return lista
}