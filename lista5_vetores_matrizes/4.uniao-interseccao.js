// Leia 2 vetores A e B com N elementos, escreva e escreva um vetor C, que represente o conjunto união
// entre os vetores A e B; e um vetor D, que represente o conjunto interseção entre os vetores A e B.
import { question } from 'readline-sync'

function main(){
    let qtd_elementos = Number(question("Quantidade de elementos: "))

    let vetorA = []
    console.log("Digite os elementos do vetor A: ")
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        vetorA.push(elemento)
    }

    let vetorB = []
    console.log("Digite os elementos do vetor B: ")
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        vetorB.push(elemento)
    }

    // União
    let vetorC = [];
    for (let i = 0; i < vetorA.length; i++) {
        if (!vetorC.includes(vetorA[i])) {
            vetorC.push(vetorA[i]);
        }
    }
    for (let i = 0; i < vetorB.length; i++) {
        if (!vetorC.includes(vetorB[i])) {
            vetorC.push(vetorB[i]);
        }
    }
    console.log(">>>> Elementos do vetor C (União) <<<<");
    for (let item of vetorC) {
        console.log(item);
    }

    // Interseção
    let vetorD = [];
    for (let i = 0; i < vetorA.length; i++) {
        if (vetorB.includes(vetorA[i]) && !vetorD.includes(vetorA[i])) {
            vetorD.push(vetorA[i]);
        }
    }
    console.log(">>>> Elementos do vetor D (Interseção) <<<<");
    for (let item of vetorD) {
        console.log(item);
    }

}

main()