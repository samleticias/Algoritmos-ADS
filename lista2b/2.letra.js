// 2. Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.
import {question} from 'readline-sync'

function main() {
    const letra = question('Digite uma letra (F ou M): ')
    console.log(verificar_letra(letra))
    
}

function verificar_letra(letra){
    if (letra.toUpperCase() === 'F') {
        return 'F - Feminino'
    } else if (letra.toUpperCase() === 'M') {
        return 'M - Masculino'
    } else {
        return 'Sexo Inválido'
    }
}

main()
