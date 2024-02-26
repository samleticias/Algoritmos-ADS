// 20. Leia a medida de um ângulo (entre 0 e 360º) e escreva o quadrante (primeiro, segundo, terceiro ou quarto) 
// que o ângulo se localiza.
import { question } from 'readline-sync'

function main() {
    const angulo = get_number('Medida do ângulo (entre 0 e 360 graus): ')

    const quadrante = verificar_quadrante(angulo)

    console.log(`O ângulo está localizado no ${quadrante} quadrante.`)
}

function verificar_quadrante(angulo) {
    if (angulo >= 0 && angulo < 90) {
        return "primeiro"
    } else if (angulo >= 90 && angulo < 180) {
        return "segundo"
    } else if (angulo >= 180 && angulo < 270) {
        return "terceiro"
    } else if (angulo >= 270 && angulo <= 360) {
        return "quarto"
    } else {
        return "fora do intervalo de 0 a 360 graus"
    }
}

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}

main()