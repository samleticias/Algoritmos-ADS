// Leia um senha de um usuário, colocando asteriscos nos caracteres digitados e verifique se a senha é
// correta ou não.
import { question } from 'readline-sync';

function main() {
    let senha = question("Digite a sua senha: ", {
        hideEchoBack: true 
    })
    console.log("Senha digitada: " + mascaraSenha(senha))

    if (verificarSenha(senha)) {
        console.log("A senha está correta!")
    } else {
        console.log("Senha incorreta!")
    }
}

function mascaraSenha(senha) {
    return "*".repeat(senha.length)
}

function verificarSenha(senha) {
    const senhaCorreta = "senha123"
    return senha === senhaCorreta
}

main()
