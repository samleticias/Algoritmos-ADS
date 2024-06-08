// Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.:
// diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.
import { question } from 'readline-sync'

function main(){
    let texto = question("Digite o texto: ")
    console.log(diagonal(texto))
}

function diagonal(texto) {
    if (texto.length > 20) {
        texto = texto.substring(0, 20)
    }
    for (let i = 0; i < texto.length; i++) {
        let linha = ' '.repeat(i) + texto[i]
        console.log(linha)
    }
}

// diagonal('Algoritmos')

main()