// Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm
// minuto(s) e ss segundo(s)”.
import { question } from 'readline-sync';

function main() {
    let horario = question("Informe um horário no formato hh:mm:ss : ") // 01 2 34 5 67
    let horario_por_extenso = escreve_horario_por_extenso(horario)
    console.log(horario_por_extenso)
}

function escreve_horario_por_extenso(horario){
    let horario_por_extenso = `${horario[0]}${horario[1]} hora(s), ${horario[3]}${horario[4]} minuto(s) e ${horario[6]}${horario[7]} segundo(s).`
    return horario_por_extenso
}

main()