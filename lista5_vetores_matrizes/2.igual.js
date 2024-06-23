// Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.
import { question } from 'readline-sync'

function main(){
    let A = []
    let qtd_elementos = Number(question("Quantos elementos terá o vetor A: "))
    
    for (let i = 0; i < qtd_elementos; i++){
        let elemento = Number(question(`Elemento ${i + 1}: `))
        A.push(elemento)
    }

    let existem_duplicados = verificar_duplicados(A);

    if (existem_duplicados) {
        console.log("Existem elementos duplicados no vetor.");
    } else {
        console.log("Não existem elementos duplicados no vetor.");
    }
}

function verificar_duplicados(array) {
    let elementos_vistos = new Set();
    for (let i = 0; i < array.length; i++) {
        if (elementos_vistos.has(array[i])) {
            return true;
        }
        elementos_vistos.add(array[i]);
    }
    return false;
}

main()