// Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
// uma mensagem de permissão de acesso ou não.
import {question} from 'readline-sync'

function main(){
    const senha = 1234
    const valor = get_number('Digite a senha: ')

    const permissao = verificar_senha(senha, valor)
    console.log(permissao)
}

function verificar_senha(senha, valor){
    if (valor === senha){
        return 'ACESSO PERMITIDO'
    } else {
        return 'ACESSO NEGADO'
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()