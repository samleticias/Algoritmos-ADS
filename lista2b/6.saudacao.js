// Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
// escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
import {question} from 'readline-sync'

function main(){
    const letra = question('Digite uma letra (M, V ou N): ')
    console.log(verificar_letra(letra))
}

function verificar_letra(letra){
    if (letra.toUpperCase() === 'M') {
        return 'Bom Dia!'
    } else if (letra.toUpperCase() === 'V') {
        return 'Boa Tarde!'
    } else if (letra.toUpperCase() === 'N') {
        return 'Boa Noite!'
    } else {
        return 'Valor Inválido!'
    }
}

main()