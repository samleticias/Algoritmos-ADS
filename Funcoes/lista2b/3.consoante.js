// 3. Leia uma letra e verifique se a letra digitada é vogal ou consoante.
import {question} from 'readline-sync'

function main(){
    const letra = question('Digite uma letra: ')
    console.log(verificar_letra(letra))

}

function verificar_letra(letra){
    if (letra.toUpperCase() === 'A' || letra.toUpperCase() === 'E' || letra.toUpperCase() === 'I' || letra.toUpperCase() === 'O' || letra.toUpperCase() === 'U'){
        return 'É uma vogal'
    } else if (letra.toLowerCase() === 'a' || letra.toLowerCase() === 'e' || letra.toLowerCase() === 'i' || letra.toLowerCase() === 'o' || letra.toLowerCase() === 'u'){
        return 'É uma vogal'
    } else {
        return 'É uma consoante'
    }
}


main()