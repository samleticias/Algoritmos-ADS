import {conteudo_arquivo, obter_total_de_palavras, obter_palavras_min_letras, obter_percentual, 
    obter_palavras_n_mais_letras, obter_palavras_sem_letra_e, obter_palavras_nao_contem_letras,
    conta_palavras_com_todas_letras, obter_total_palavras_contem_apenas_letras,
    obter_palavras_com_mais_vogais, obter_palavras_palindromas, obter_palavras_mais_vinte_letras,
    contar_palavras_mesma_letra, opcoes, obter_palavra_maior_valor_ascii, obter_valor_ascii_palavra,
    obter_somatorio_palavras_ascii_multiplo_n, conta_palavras_somatorio_ascii_multiplo_n,
    obter_total_palavras_abecedarias,
    obter_palavras_com_mais_consoantes,
    obter_palavras_com_mesma_quantidade_vogais_consoantes,
    contar_palavras_comecam_terminam_letras_informadas,
    mostrar_palavras_mais_20_letras
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
        opcao = exibir_opcoes(opcoes())

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
            let qtd_desejada = get_numero_positivo('Você gostaria de visualizar palavras que contenham a partir de quantas letras?\n')
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
            let letras = obter_texto('Quais letras você não quer que estejam nas palavras?\n')
            let qtd_palavras = obter_palavras_nao_contem_letras(palavras, letras)
            exibe_texto(`O total de palavras sem as letras ${letras} é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 6 - Palavras que contem todas as letras
        } else if (opcao == 6){
            clear_screen()
            let qtd_palavras = conta_palavras_com_todas_letras(palavras)
            exibe_texto(`O total de palavras com todas as letras é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 7 - Palavras que só contém letras
        } else if (opcao == 7){
            clear_screen()
            let letras = get_texto('Quais são as letras que você quer nas palavras?\n')
            let qtd_palavras = obter_total_palavras_contem_apenas_letras(palavras, letras)
            exibe_texto(`O total de palavras com as letras desejadas é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 8 - Quantas palavras contém mais vogais que consoantes
        } else if (opcao == 8){
            clear_screen()
            let qtd_palavras = obter_palavras_com_mais_vogais(palavras)
            exibe_texto(`O total de palavras com mais vogais que consoantes é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 9 - Palavras "Palíndromas"
        } else if (opcao == 9){
            clear_screen()
            let qtd_palavras = obter_palavras_palindromas(palavras)
            exibe_texto(`O total de palavras palíndromas é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 10 - Palavras "Abecedárias"
        } else if (opcao == 10){
            clear_screen()
            let qtd_palavras = obter_total_palavras_abecedarias(palavras)
            exibe_texto(`O total de palavras abecedárias é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 11 - Palavras com +20 letras
        } else if (opcao == 11){
            clear_screen()
            let qtd_palavras = obter_palavras_mais_vinte_letras(palavras)
            let palavras_mais_20 = mostrar_palavras_mais_20_letras(palavras)
            exibe_texto(palavras_mais_20)
            exibe_texto(`O total de palavras com 20+ letras é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 12 - Palavra(s) com maior valor ASCII
        } else if (opcao == 12){
            clear_screen()
            let palavra_maior_valor_ascii = obter_palavra_maior_valor_ascii(palavras)
            exibe_texto("A palavra com maior valor ASCII é " + palavra_maior_valor_ascii)
            exibe_texto("Valor ASCII = " + obter_valor_ascii_palavra(palavra_maior_valor_ascii) + "\n")
            enter_to_go_back()
            
        // 13 - Somatório ASCII das Palavras de Tamanho Múltiplo de N
        } else if (opcao == 13){ 
            clear_screen()
            let multiplo = get_numero_positivo('Você deseja visualizar palavras de tamanho múltiplo de qual número?\n')
            let qtd_palavras = conta_palavras_somatorio_ascii_multiplo_n(palavras, multiplo)
            let somatorio_ascii = obter_somatorio_palavras_ascii_multiplo_n(palavras, multiplo)
            exibe_texto(`O somatório ASCII de palavras de tamanho múltiplo de ${multiplo} é ${somatorio_ascii}.`)
            exibe_texto(`O total de palavras de tamanho múltiplo de ${multiplo} no somatório ASCII é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()
            
        // 14 - Contar/listar palavras que começam e terminam com a mesma letra
        } else if (opcao == 14){
            clear_screen()
            let qtd_palavras = contar_palavras_mesma_letra(palavras)
            exibe_texto(`O total de palavras que começam e terminam com a mesma letra é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 15 - Quantas palavras contém mais consoantes que vogais  
        } else if (opcao == 15){
            clear_screen()
            let qtd_palavras = obter_palavras_com_mais_consoantes(palavras)
            exibe_texto(`O total de palavras com mais consoantes que vogais é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 16 - Quantas palavras contém a mesma quantidade de vogais e consoantes
        } else if (opcao == 16){
            clear_screen()
            let qtd_palavras = obter_palavras_com_mesma_quantidade_vogais_consoantes(palavras)
            exibe_texto(`O total de palavras com a mesma quantidade de consoantes e vogais é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()

        // 17 - Quantas palavras começam e terminam com as letras informadas
        } else if (opcao == 17){
            clear_screen()
            let primeira_letra = get_texto('Qual a primeira letra desejada?\n')
            let segunda_letra = get_texto('Qual a segunda letra desejada?\n')
            let qtd_palavras = contar_palavras_comecam_terminam_letras_informadas(palavras, primeira_letra, segunda_letra)
            exibe_texto(`O total de palavras com as letras desejadas é ${qtd_palavras} palavras.`)
            exibe_texto(`Percentual = ${obter_percentual(qtd_palavras, total_palavras).toFixed(2)}% do total de palavras\n`)
            enter_to_go_back()
        }
    }
}

main()