import { question } from "readline-sync";

function main(){
    let casos_teste = get_number('quantidade de casos de teste: ')
    let contador = 0

    while (contador < casos_teste){
        let numero_estudantes = get_number('numero de estudantes: ')
        let nomes_estudantes = get_texto('nomes dos estudantes separado por espaco: ')
        let lista_nomes = nomes_estudantes.split(' ')
        let frequencia_str = get_texto('frequencia dos estudantes separada por espaco: ')
        let lista_frequencia = frequencia_str.split(' ')
        let lista_faltosos = obter_lista_faltosos(lista_frequencia, lista_nomes)
        console.log(remove_virgulas(lista_faltosos))
        contador++
    }
}

function remove_virgulas(lista){
    let frase = ''
    for (let elemento of lista){
        frase += elemento + ' '
    }
    return frase
}

function obter_lista_faltosos(lista_frequencia, lista_nomes){
    let lista_faltosos = []

    for (let i = 0; i < meu_length(lista_frequencia); i++){
        let frequencia = lista_frequencia[i]
        let total_aulas = meu_length(frequencia)
        let presencas = 0
        let aulas_validas = 0

        for (let caracter of frequencia){
            if (caracter !== 'M'){
                aulas_validas += 1
                if (caracter == 'P'){
                    presencas += 1
                }
            }
        }
        if ((presencas / aulas_validas) * 100 < 75){
            meu_push(lista_faltosos, lista_nomes[i])
        }
        return lista_faltosos
    }
}

function meu_length(texto){
    let tamanho = 0
    for (let caracter of texto){
        tamanho = tamanho + 1
    }
    return tamanho
}

function meu_push(lista, elemento){
    lista.push(elemento)
    return lista
}

function get_number(texto){
    let numero = Number(question(texto))
    return numero
}

function get_texto(mensagem){
    let texto = question(mensagem)
    return texto
}

main()