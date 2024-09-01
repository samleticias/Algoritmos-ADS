import { question } from "readline-sync";

function main(){
    let casos_teste = get_number('Quantos casos de teste?\n')
    
    for (let i = 0; i < casos_teste; i++){
        let caso = get_number(`Caso ${i+1}: `)
        let caso_para_string = my_to_string(caso)
        let qtd_leds = 0

        for (let caracter of caso_para_string){
            if (caracter == '1'){
                qtd_leds = qtd_leds + 2
            } 
            if (caracter == '2'){
                qtd_leds = qtd_leds + 5
            }
            if (caracter == '3'){
                qtd_leds = qtd_leds + 5
            }
            if (caracter == '4'){
                qtd_leds = qtd_leds + 4
            }
            if (caracter == '5'){
                qtd_leds = qtd_leds + 5
            }
            if (caracter == '6'){
                qtd_leds = qtd_leds + 6
            }
            if (caracter == '7'){
                qtd_leds = qtd_leds + 3
            }
            if (caracter == '8'){
                qtd_leds = qtd_leds + 7
            }
            if (caracter == '9'){
                qtd_leds = qtd_leds + 6
            }
            if (caracter == '0'){
                qtd_leds = qtd_leds + 6
            }
        }
        mostra_texto(`${qtd_leds} leds\n`)
    }
}

function my_to_string(numero){
    return numero.toString()
}

function mostra_texto(mensagem){
    console.log(mensagem)
}

function get_number(mensagem){
    return Number(question(mensagem))
}

main()