// Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).
import { question } from 'readline-sync'

function main(){
    let data = question("DIigite uma data no formato DD/MM/AAAA: ") // 01 2 34 5 6789
    let mes_por_extenso = escreve_mes_por_extenso(data)
    console.log(`${data[0]}${data[1]} de ${mes_por_extenso} de ${data[6]}${data[7]}${data[8]}${data[9]}`)
}

function escreve_mes_por_extenso(data){
    let mes = ''
    if (data[3] == '0'){
        if (data[4] == '1'){
            mes = 'janeiro'
        } else if (data[4] == '2'){
            mes = 'fevereiro'
        } else if (data[4] == '3'){
            mes = 'março'
        } else if (data[4] == '4'){
            mes = 'abril'
        } else if (data[4] == '5'){
            mes = 'maio'
        } else if (data[4] == '6'){
            mes = 'junho'
        } else if (data[4] == '7'){
            mes = 'julho'
        } else if (data[4] == '8'){
            mes = 'agosto'
        } else {
            mes = 'setembro'
        }
    } else if (data[3] == '1'){
        if (data[4] == '0'){
            mes = 'outubro'
        } else if (data[4] == '1'){
            mes = 'novembro'
        } else {
            mes = 'dezembro'
        }
    }
    return mes
}

main()