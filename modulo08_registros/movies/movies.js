import { clear_screen, press_enter_to_continue, print } from "../../utils/io_utils.js"
import { create_movie, get_opcoes, listar_movies, menu_filmes_crud } from "./movies_utils.js"
import {meu_push} from '../../utils/my_collection_utils.js'

function main(){
    let movies = []
    let opcao = -1

    while (opcao !== 0){
        clear_screen()
        let opcao = get_opcoes(menu_filmes_crud())

        if (opcao === 0){
            clear_screen()
            print('Saindo ...')
            break

        } else if (opcao === 1){
            clear_screen()
            let new_movie = create_movie() 
            meu_push(movies, new_movie)
            print('\nFilme cadastrado com sucesso!')
            press_enter_to_continue()

        } else if (opcao === 2){
            clear_screen()
            listar_movies(movies)
            press_enter_to_continue()
        }
    }
}

main()