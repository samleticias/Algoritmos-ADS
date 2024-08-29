import { question } from "readline-sync";

// Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, 
// inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').

// Entrada
// A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, cada uma contendo uma string.
// Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma
// letra ('A'-'Z','a'-'z').

// Saída
// O tamanho da maior subsequência comum entre as duas Strings.

function main(){
    let primeiro_caso = get_text('Primeiro caso: ')
    let segundo_caso = get_text('Segundo caso: ')

    let qtd_substrings_comuns = obter_quantidade_substrings_em_comum(primeiro_caso, segundo_caso)
    console.log(`Qtd. Substrings = ${qtd_substrings_comuns}`)
}

function obter_quantidade_substrings_em_comum(palavra1, palavra2) {
    let substringsEncontradas = []
    
    for (let i = 0; i < palavra1.length; i++) {
        for (let j = 0; j < palavra2.length; j++) {
            let k = 0
            while (i + k < palavra1.length && j + k < palavra2.length && palavra1[i + k] === palavra2[j + k]) {
                k++
                let substring = palavra1.substring(i, i + k);
                if (k > 1 && !substringsEncontradas.includes(substring)) {
                    substringsEncontradas.push(substring)
                }
            }
        }
    }
    
    return substringsEncontradas.length
}

function get_text(mensagem){
    return question(mensagem)
}

main()