import { question } from "readline-sync"
import {get_number} from '../utils/io_utils.js'

function main(){
    const N = get_number('Digite a quantidade de dígitos para a senha: ');
    let satisfeito = 'N';

    let gerador_senha = gerar_senha_aleatoria(satisfeito, N);

}

function gerar_numero_aleatorio(limite){
    return Math.floor(Math.random() * limite + 1);
}

function gerar_senha_aleatoria(satisfeito, N){
    while (satisfeito === 'N'){
        let contador = 0;
        let senha = '';
        let digito_anterior = 0;

        while (contador < N){
            let numero_gerado = gerar_numero_aleatorio(9);

            while (numero_gerado === digito_anterior){
                numero_gerado = gerar_numero_aleatorio(9);
            }
            digito_anterior = numero_gerado;
            senha += digito_anterior;
            contador++;
        }

        console.log(`-> Senha gerada: ${senha} `)
        satisfeito = question('-> Está satisfeito com a senha? (S/N) ')
    }
}

main()