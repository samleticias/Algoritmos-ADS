// Escreva os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...). .
import { question } from 'readline-sync'

function main(){
    let qtd_termos = Number(question("Quantidade de termos: "))
    let fibonacci = [0, 1]
    if (qtd_termos === 1) {
        console.log(`Elemento 1: 0`);
        return;
    } else if (qtd_termos >= 2) {
        console.log(`Elemento 1: 0`);
        console.log(`Elemento 2: 1`);
    }
    for (let i = 2; i < qtd_termos; i++){
        let proximo_elemento = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(proximo_elemento)
        console.log(`Elemento ${i + 1}: ${fibonacci[i]}`)
    }
}

main()