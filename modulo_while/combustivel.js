import { get_number, print } from '../utils/io_utils.js'

function main(){
    let codigo_combustivel = 0
    let soma_alcool = 0
    let soma_gasolina = 0
    let soma_diesel = 0

    while (true){
        codigo_combustivel = get_number('Tipo de combustível (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim): ')

        if (codigo_combustivel === 1){
            soma_alcool++
        } else if (codigo_combustivel === 2){
            soma_gasolina++
        } else if (codigo_combustivel === 3){
            soma_diesel++
        } else if (codigo_combustivel === 4){
            const resultado = `
            MUITO OBRIGADO
            Alcool: ${soma_alcool}
            Gasolina: ${soma_gasolina}
            Diesel: ${soma_diesel}
            `
            print(resultado)
            break
        }
    }
}

main()