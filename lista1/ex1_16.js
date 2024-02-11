// Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
import { question } from "readline-sync"

// entrada
var lado = Number(question('valor do lado: '))

// processamento
var area = lado**2

// saída
console.log(`Área do quadrado: ${area.toFixed(2)}`)