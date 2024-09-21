import { get_positive_number, get_text } from "../utils/io_utils.js"

function main(){
    const n = get_positive_number("> Digite quantos digitos terá a senha: ")
    let satisfeito = 'N'
    while(satisfeito === 'N'){
        let contador = 0
        let senha = ""
        let digito_anterior = 0;
        while(contador < n){
            let numero_gerado =  gerar_numero_aleatorio(9)
            while(numero_gerado === digito_anterior){
                numero_gerado = gerar_numero_aleatorio(9)
            }
            digito_anterior = numero_gerado
            senha += numero_gerado
            contador++;
        }
        console.log(`(!) A senha gerada foi: ${senha}`)
        satisfeito = get_text("> Você está satisfeito com a senha? (S/N)\n ")
    }
}

function gerar_numero_aleatorio(limite){
    return Math.floor(Math.random() * limite + 1)
}

main()