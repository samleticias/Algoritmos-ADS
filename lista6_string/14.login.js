// Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte
// regra: o login é composto pelas letras iniciais do nome do usuário.
import { question } from 'readline-sync'

function main() {
    let nomeUsuario = question("Digite o nome do usuário: ")
    let login = gerarLogin(nomeUsuario)
    console.log(`O login para ${nomeUsuario} é: ${login}`)
}

function gerarLogin(nome) {
    let partesNome = nome.split(' ')
    let iniciais = partesNome.map(nome => nome[0].toUpperCase()).join('')
    return iniciais
}

main()
