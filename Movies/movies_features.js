// Movies Utils
import { obter_indice_filme } from './movies_utils.js'
import { print, get_number, get_text, get_number_in_range } from './util/my_entsai_utils.js'
import { texto_para_caixa_baixa, texto_para_caixa_alta } from './util/my_string_utils.js'
import { get_size } from './util/my_collection_utils.js'

// funcao para cadastrar novo filme
export function cadastrar_filme() {
    print('>>>> Cadastro de Filme <<<<\n')
    let filme = {}

    filme["nome"] = get_text('> Qual o nome do filme?\n')
    filme["ano"] = get_number(`> Qual o ano de lançamento do filme ${filme.nome}?\n`)
    filme["imdb"] = get_number(`> Qual a nota da IMDB do filme ${filme.nome}?\n`)
    filme["bilheteira"] = get_number(`> Qual o valor da arrecadação em dólares do filme ${filme.nome}?\n`)
    filme["duracao"] = get_number(`> Qual a duração em minutos do filme ${filme.nome}?\n`)
    filme["idioma"] = get_text(`> Qual o idioma do filme ${filme.nome}?\n`)
    filme["pais"] = get_text(`> Qual o país de origem do filme ${filme.nome}?\n`)
    filme["data_lancamento"] = get_text(`> Qual a data de lançamento do filme ${filme.nome}? (YYYY-MM-DD)\n`)
    filme["genero"] = get_text(`> Qual o gênero do filme ${filme.nome}? (YYYY-MM-DD)\n`)

    return filme
}

export function atualizar_filme(indice, filmes) {
    let filme_atual = filmes[indice]

    let atualizacoes = {
        'nome': 1,
        'ano': 2,
        'imdb': 3,
        'bilheteira': 4,
        'duracao': 5,
        'idioma': 6,
        'pais': 7,
        'data_lancamento': 9,
        'genero': 10
    }

    let texto = `
        \t1 - Nome
        \t2 - Ano de lançamento
        \t3 - Nota na IMDB
        \t4 - Arrecadação
        \t5 - Duração
        \t6 - Idioma
        \t7 - País de origem
        \t8 - Data de lançamento
        \t9 - Gênero
        > `

    let alteracao_desejada = get_number_in_range(texto, 1, 10)

    if (alteracao_desejada === atualizacoes['nome']) {
        let novo_nome = get_text('Qual será o novo nome do filme?\n')
        filme_atual.nome = novo_nome
    } else if (alteracao_desejada === atualizacoes['ano']) {
        let novo_ano = get_number('Qual será o novo ano de lançamento?\n')
        filme_atual.ano = novo_ano
    } else if (alteracao_desejada === atualizacoes['imdb']) {
        let nova_nota_imdb = get_number('Qual será a nova nota na IMDB?\n')
        filme_atual.imdb = nova_nota_imdb
    } else if (alteracao_desejada === atualizacoes['bilheteira']) {
        let nova_bilheteira = get_number('Qual será a nova arrecadação (em dólares)?\n')
        filme_atual.bilheteira = nova_bilheteira
    } else if (alteracao_desejada === atualizacoes['duracao']) {
        let nova_duracao = get_number('Qual será a nova duração do filme (em minutos)?\n')
        filme_atual.duracao = nova_duracao
    } else if (alteracao_desejada === atualizacoes['idioma']) {
        let novo_idioma = get_text('Qual será o novo idioma do filme?\n')
        filme_atual.idioma = novo_idioma
    } else if (alteracao_desejada === atualizacoes['pais']) {
        let novo_pais = get_text('Qual será o novo país de origem do filme?\n')
        filme_atual.pais = novo_pais
    } else if (alteracao_desejada === atualizacoes['data_lancamento']) {
        let nova_data_lancamento = get_text('Qual será a nova data de lançamento (YYYY-MM-DD)?\n')
        filme_atual.dataLancamento = nova_data_lancamento
    } else if (alteracao_desejada === atualizacoes['genero']) {
        let novo_genero = get_text('Qual será o novo gênero do filme?\n')
        filme_atual.genero = novo_genero
    } 

    filmes[indice] = filme_atual
}

// funcao para listar filmes
export function listar_filmes(filmes, label = '\nLista de Filmes:') {
    print(label)
    for (let filme of filmes) {
        print(`\n
            > Título do Filme: ${filme.nome}\n
            | Ano de Lançamento: ${filme.ano}\n
            | Nota na IMDB: ${filme.imdb}\n
            | Arrecadação: $${filme.bilheteira.toLocaleString()}\n
            | Duração: ${filme.duracao} minutos\n
            | Idioma: ${filme.idioma}\n
            | País de Origem: ${filme.pais}\n
            | Data de Lançamento: ${filme.data_lancamento}\n
            | Gênero: ${filme.genero}`)
    }
}

// funcao para remover filme da lista de filmes
export function remover_filme(filmes){
    print('\n> Escolha o índice do filme que deseja remover:\n')
    let indice_desejado = obter_indice_filme(filmes)
    let nome = filmes[indice_desejado].nome
    filmes.splice(indice_desejado, 1)
    print(`\nFilme ${nome} removido com sucesso!\n`)
}

// funcao para mostrar quantidade de filmes por genero
export function mostra_quantidade_filmes_genero(filmes){
    let qtd_por_genero = {}
    
    for (let i = 0; i < get_size(filmes); i++) {
        const genero_atual = filmes[i].genero.trim().replace(/\r|\n/g, '')
        qtd_por_genero[genero_atual] = (qtd_por_genero[genero_atual] || 0) + 1
    }
    print('Filmes por gênero:')
    print('-----------------------------')
    for (let genero in qtd_por_genero) {
        print(`${texto_para_caixa_alta(genero.charAt(0)) + genero.slice(1)} > ${qtd_por_genero[genero]}`)
    }
    print('-----------------------------')
}


// funcao para mostrar quantidade de filmes por país
export function mostra_quantidade_filmes_pais(filmes){
    let qtd_pais = {}
    for (let i = 0; i < get_size(filmes); i++) {
        const pais_atual = filmes[i].pais
        qtd_pais[pais_atual] = (qtd_pais[pais_atual] || 0) + 1
    }
    print('Filmes por país:')
    print('-----------------------------')
    for (let pais in qtd_pais) {
        print(`${pais.charAt(0).toUpperCase() + pais.slice(1)} > ${qtd_pais[pais]}`)
    }
    print('-----------------------------')
}

// funcao para mostrar quantidade de filmes por idioma
export function mostra_quantidade_filmes_idioma(filmes){
    let qtd_por_idioma = {}
    
    for (let i = 0; i < get_size(filmes); i++) {
        const idioma_atual = filmes[i].idioma
        qtd_por_idioma[idioma_atual] = (qtd_por_idioma[idioma_atual] || 0) + 1
    }
    print('Filmes por idioma:')
    print('-----------------------------')
    for (let idioma in qtd_por_idioma) {
        print(`${texto_para_caixa_alta(idioma.charAt(0)) + idioma.slice(1)} > ${qtd_por_idioma[idioma]}`)
    }
    print('-----------------------------')
}

// funcao para filtrar quantidade de filmes por atributo
export function filtrar_filmes(filmes, criterio, valor) {
    return filmes.filter(filme => {
        if (criterio === 'genero') {
            return texto_para_caixa_baixa(filme.genero).includes(texto_para_caixa_baixa(valor))
        } else if (criterio === 'nome') {
            return texto_para_caixa_baixa(filme.nome).includes(texto_para_caixa_baixa(valor))
        } else if (criterio === 'idioma') {
            return texto_para_caixa_baixa(filme.idioma).includes(texto_para_caixa_baixa(valor))
        } else if (criterio === 'ano') {
            return filme.ano === parseInt(valor, 10)
        }
        return false
    })
}

// Função para ordenar filmes usando bubble sort 
export function ordenar_filmes(filmes, atributo, ordem = 'ASC') {
    let reverse = ordem === 'DESC'
    let criterio = x => texto_para_caixa_baixa(x[atributo])
    
    let ultima_pos_n_ordenada = get_size(filmes) - 1
    let qtd_elementos_a_ordenar = get_size(filmes) - 1

    while (qtd_elementos_a_ordenar > 0) {
        for (let i = 0; i < ultima_pos_n_ordenada; i++) {
            let valorA = criterio(filmes[i])
            let valorB = criterio(filmes[i + 1])

            if (!reverse) {
                if (valorA > valorB) {
                    [filmes[i], filmes[i + 1]] = [filmes[i + 1], filmes[i]]
                }
            } else {
                if (valorA < valorB) {
                    [filmes[i], filmes[i + 1]] = [filmes[i + 1], filmes[i]]
                }
            }
        }
        qtd_elementos_a_ordenar -= 1
    }
    return filmes
}

// funcao para obter filme com maior bilheteria
export function filme_com_maior_bilheteira(filmes) {
    print('\nFilme com maior bilheteria:\n')
    return filmes.reduce((max, filme) => {
        return filme.bilheteira > max.bilheteira ? filme : max;
    }, filmes[0])
}

// funcao para obter filme com menor bilheteria
export function filme_com_menor_bilheteira(filmes) {
    print('\nFilme com menor bilheteria:\n')
    return filmes.reduce((min, filme) => {
        return filme.bilheteira < min.bilheteira ? filme : min;
    }, filmes[0])
}






