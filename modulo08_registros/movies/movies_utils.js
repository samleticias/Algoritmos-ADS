// Movies Utils
import {get_number, get_text, print} from '../../utils/io_utils.js'
import { question } from "readline-sync"
import { meu_length } from '../../utils/my_collection_utils.js'
import { writeFileSync } from "fs";

// funcao para exibir menu de opções do CRUD de filmes
export function menu_filmes_crud(){
    const opcoes = [
        '--------------------------',
        '====== ROGER MOVIES ======',
        '--------------------------',
        '1 - Cadastrar Filme',
        '2 - Listar Filmes',
        '3 - Remover Filme da Lista',
        '==========================',
    ]
    return opcoes
}

// funcao para mostrar opcoes e solicitar opcao do menu
export function get_opcoes(opcoes, label='Escolha uma das opções a seguir:'){
    console.log(label)
    for (let i = 0; i < opcoes.length; i++){
        console.log(`> ${opcoes[i]}`)
    }
    let opcao_escolhida = Number(question('Digite o número da opção desejada:\n'))
    return opcao_escolhida
}

// funcao para cadastrar novo filme
export function create_movie(){
    print('>>>> Cadastro de Filme <<<<\n')
    let movie = {}
    movie["nome"] = get_text('Nome do filme: ')
    movie["ano"] = get_number('Ano de lançamento do filme: ')
    movie["imdb"] = get_number('Nota na IMDB: ')
    movie["bilheteria"] = get_number('Arrecadação: ')
    return movie
}

// funcao para listar filmes
export function listar_movies(movies, label = 'Lista de Filmes:'){
    print(label)
    for (let i = 0; i < meu_length(movies); i++){
        let movie = movies[i]
        print('----------------------------------')
        print(`Nome: ${movie.nome}`)
        print(`Ano de Lançamento: ${movie.ano}`)
        print(`Nota na IMDB: ${movie.imdb}`)
        print(`Arrecadação: ${movie.bilheteria}`)
        print('----------------------------------')
    }
}