// Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
// um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
// não pode ser negativo.
import {question} from 'readline-sync'

function main(){
    let x1 = get_number('Coordenada x do 1º ponto: ')
    let y1 = get_number('Coordenada y do 1º ponto: ')
    let x2 = get_number('Coordenada x do 2º ponto: ')
    let y2 = get_number('Coordenada y do 2º ponto: ')

    const area_retangulo = calcular_area(x1, x2, y1, y2)

}

function calcular_area(x1, x2, y1, y2){
    const comprimento = Math.abs(x2 - x1)
    const largura = Math.abs(y2 - y1)

    let area = comprimento * largura

    if (area < 0) {
        area = 0;
        console.log('A área do retângulo é 0 (Área não pode ser negativa)')
    } else {
        console.log(`A área do retângulo é ${area.toFixed(2)}`)
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()