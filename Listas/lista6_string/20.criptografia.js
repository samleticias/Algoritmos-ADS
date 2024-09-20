// Leia uma frase e faça a criptografia, retirando as vogais das palavras. O programa deverá armazenar
// estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase
// e mostrá-la na tela.
import { question } from 'readline-sync'

function main() {
    let frase = question("Digite uma frase: ")
    let [fraseCriptografada, vogaisInfo] = criptografar(frase)
    console.log(`Frase criptografada: ${fraseCriptografada}`)

    let fraseDescriptografada = descriptografar(fraseCriptografada, vogaisInfo)
    console.log(`Frase descriptografada: ${fraseDescriptografada}`)
}

function criptografar(frase) {
    let vogais = 'aeiouAEIOU'
    let vogaisInfo = []
    let fraseCriptografada = ''

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            vogaisInfo.push({ char: frase[i], pos: i })
        } else {
            fraseCriptografada += frase[i]
        }
    }

    return [fraseCriptografada, vogaisInfo]
}

function descriptografar(fraseCriptografada, vogaisInfo) {
    let fraseDescriptografada = fraseCriptografada.split('')
    
    for (let i = 0; i < vogaisInfo.length; i++) {
        let { char, pos } = vogaisInfo[i]
        fraseDescriptografada.splice(pos, 0, char)
    }

    return fraseDescriptografada.join('')
}

main()
