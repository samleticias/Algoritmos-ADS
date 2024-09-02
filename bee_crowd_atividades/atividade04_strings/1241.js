import { question } from "readline-sync";

function main(){
    let qtd_casos_teste = get_number('Qtd. Casos de Teste: ')

    for (let i = 0; i < qtd_casos_teste; i++){
        let entrada = question('Digite dois valores separados por espaço: ')

        let [valor1, valor2] = entrada.split(' ')

        let verificacao = encaixa(valor1, valor2)

        if (verificacao == true){
            console.log('encaixa')
        } else {
            console.log('nao encaixa')
        }
    }
}

function encaixa(primeira_string, segunda_string){
    const tamanho_primeira = primeira_string.length
    const tamanho_segunda = segunda_string.length

    if (tamanho_segunda > tamanho_primeira){
        return false
    }

    const final_primeira = primeira_string.substring(tamanho_primeira - tamanho_segunda)

    return final_primeira === segunda_string
}

function get_number(texto){
    return Number(question(texto))
}

main()