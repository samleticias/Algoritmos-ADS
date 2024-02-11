import { question } from 'readline-sync'

// Entrada
const latao_kg = Number(question('Insira uma quantidade em kg de latão: '))

// Processamento
const cobre = latao_kg*0.7
const zinco = latao_kg*0.3

// Saída
console.log('Para produzir', latao_kg, 'kg de latão, são necessários', cobre.toFixed(2),'kg de cobre e', zinco,'kg de zinco.')