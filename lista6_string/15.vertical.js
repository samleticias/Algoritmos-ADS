// Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.:
// vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.
import { question } from 'readline-sync'

function main(){
    let texto = question("Digite o texto: ")
    let coluna = Number(question("Digite a coluna: "))
    console.log(vertical(coluna, texto))
}

// vertical(10, 'Algoritmos');

function vertical(coluna, texto) {
    for (let i = 0; i < texto.length; i++) {
        let linha = ' '.repeat(coluna) + texto[i]
        console.log(linha)
    }
}

main()