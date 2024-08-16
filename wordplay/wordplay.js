import {conteudo_arquivo, obter_total_de_palavras, obter_palavras_min_letras, obter_percentual, obter_palavras_n_mais_letras, 
    obter_palavras_sem_letra_e, mostrar_palavras_mais_20_letras, obter_palavra_letras_duplas_consecutivas, obter_palavras_palindromas,
    obter_palavras_mais_vinte_letras, get_opcoes, obter_palavra_maior_valor_ascii, obter_valor_ascii_palavra, obter_total_palavras_abecedarias, 
    obter_palavras_nao_contem_letras, listar_palavras_contem_letras, obter_palavras_contem_letras, obter_total_palavras_contem_letras,
    listar_palavras_palindromas, listar_palavras_abecedarias
} from './menu.js'
import {exibir_opcoes, exibe_texto, get_numero_positivo, get_texto, clear_screen, enter_to_go_back} from './io_utils.js'

function main(){
    let conteudo_arquivo_txt = conteudo_arquivo()
    let palavras = conteudo_arquivo_txt.split('\n')

    // mostra opções do menu
    mostra_resultado(palavras)
}

function mostra_resultado(palavras){
    let opcao = -1
    let total_palavras = obter_total_de_palavras(palavras)

    while (opcao !== 0){
        clear_screen()
        opcao = exibir_opcoes(get_opcoes())

        // 0 - Sair
        if (opcao == 0){
            clear_screen()
            exibe_texto('Encerrando programa...')
            break

        // 1 - Total de palavras
        } else if (opcao == 1){
            clear_screen()
            exibe_texto(`Total de palavras: ${total_palavras} palavras.\n`)
            enter_to_go_back()

        // 2 - Palavras com no mínimo X letras
        } else if (opcao == 2){
            clear_screen()
            let minimo = get_numero_positivo('Você deseja visualizar palavras com no mínimo quantas letras?\n')
            let qtd_palavras = obter_palavras_min_letras(palavras, minimo)
            exibe_texto(`O total de palavras com no mínimo ${minimo} letras é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 3 - Palavras com N+ letras
        } else if (opcao == 3){ 
            clear_screen()
            let qtd_desejada = get_numero_positivo('Você gostaria de visualizar palavras que contenham mais que quantos caracteres?\n')
            let qtd_palavras = obter_palavras_n_mais_letras(palavras, qtd_desejada)
            exibe_texto(`O total de palavras com ${qtd_desejada}+ letras é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 4 - Palavras sem letra e
        } else if (opcao == 4){
            clear_screen()
            let qtd_palavras = obter_palavras_sem_letra_e(palavras)
            exibe_texto(`O total de palavras sem a letra "e" é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 5 - Palavras que não contém letras
        } else if (opcao == 5){
            clear_screen()
            let letras = get_texto('Quais letras você não quer que estejam nas palavras?\n')
            let qtd_palavras = obter_palavras_nao_contem_letras(palavras, letras)
            exibe_texto(`O total de palavras sem as letras ${letras} é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(4)}% do total de palavras\n`)
            enter_to_go_back()

        // 6 - Palavras que só contém letras
        } else if (opcao == 6){
            clear_screen()
            let letras = get_texto('Quais são as letras que você quer nas palavras?\n')
            let qtd_palavras = obter_total_palavras_contem_letras(palavras, letras)
            exibe_texto(`O total de palavras com as letras desejadas é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(4)}% do total de palavras\n`)
            enter_to_go_back()

        // 7 - Palavras "Palíndromas"
        } else if (opcao == 7){
            clear_screen()
            let qtd_palavras = obter_palavras_palindromas(palavras)
            let palavras_palindromas = listar_palavras_palindromas(palavras) 
            exibe_texto(palavras_palindromas)
            exibe_texto(`O total de palavras palíndromas é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(6)}% do total de palavras\n`)
            enter_to_go_back()

        // 8 - Palavras "Abecedárias"
        } else if (opcao == 8){
            clear_screen()
            let qtd_palavras = obter_total_palavras_abecedarias(palavras)
            let palavras_abecedarias = listar_palavras_abecedarias(palavras) 
            exibe_texto(palavras_abecedarias)
            exibe_texto(`O total de palavras abecedárias é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(6)}% do total de palavras\n`)
            enter_to_go_back()

        // 9 - Palavras com +20 letras
        } else if (opcao == 9){
            clear_screen()
            let qtd_palavras = obter_palavras_mais_vinte_letras(palavras)
            let palavras_mais_20 = mostrar_palavras_mais_20_letras(palavras)
            exibe_texto(palavras_mais_20)
            exibe_texto(`O total de palavras com 20+ letras é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(6)}% do total de palavras\n`)
            enter_to_go_back()

        // 10 - Palavra(s) com maior valor ASCII
        } else if (opcao == 10){
            clear_screen()
            let palavra_maior_valor_ascii = obter_palavra_maior_valor_ascii(palavras)
            exibe_texto("A palavra com maior valor ASCII é " + palavra_maior_valor_ascii)
            exibe_texto("Valor ASCII = " + obter_valor_ascii_palavra(palavra_maior_valor_ascii) + "\n")
            
        // 11 - Quantas palavras começam com a primeira letra informada, tem a segunda letra informada
        // no meio (depende se palavra.length é par ou ímpar) e a terminam com a terceira letra informada
        } else if (opcao == 11){
            clear_screen()
            let tres_letras = get_texto('Quais as três letras desejadas?\n')
            let qtd_palavras = obter_palavras_contem_letras(palavras, tres_letras)
            let palavras_resultado = listar_palavras_contem_letras(palavras, tres_letras)
            exibe_texto('\n') 
            exibe_texto('-------------------\n') 
            exibe_texto(palavras_resultado)
            exibe_texto('-------------------\n') 
            exibe_texto(`O total de palavras com as letras desejadas é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(4)}% do total de palavras\n`)
            enter_to_go_back()

        // 12 - Dê uma palavra com três letras duplas consecutivas / ex: jjiikk commttee
        } else if (opcao == 12){
            clear_screen()
            let palavra_tres_letras_duplas_consecutivas = obter_palavra_letras_duplas_consecutivas(palavras)
            exibe_texto('----------------------------------------------------------------')
            exibe_texto('A palavra com três letras duplicadas consecutivas é: ' + palavra_tres_letras_duplas_consecutivas)
            exibe_texto('----------------------------------------------------------------')
            enter_to_go_back()
        }
    }
}

main()