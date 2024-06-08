// Os editores de texto possuem um recurso que permite que o usuário substitua uma sub-cadeia de um
// texto por outra cadeia de caracteres. Escreva um programa que realize esta ação numa frase dada.
import { question } from 'readline-sync'

function main() {
    let frase = question("Digite uma frase: ")
    let subCadeia = question("Digite a subcadeia a ser substituída: ")
    let novaCadeia = question("Digite a nova cadeia de caracteres: ")
    
    let novaFrase = substituirCadeia(frase, subCadeia, novaCadeia)
    console.log(`Frase atualizada: ${novaFrase}`)
}

function substituirCadeia(frase, subCadeia, novaCadeia) {
    let regex = new RegExp(subCadeia, 'g')
    return frase.replace(regex, novaCadeia)
}

main()
