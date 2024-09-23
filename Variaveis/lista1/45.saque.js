import { question } from 'readline-sync'
// Entrada
const saque = Number(question('valor a ser sacado: R$'))

// Processamento
const cinquenta = saque/50
const dez = (saque%50)/10
const cinco = ((saque%50)%10)/5
const um = ((saque%50)%10)%5

// Saída
console.log('Você receberá', Math.floor(cinquenta),'nota(s) de cinquenta reais,',Math.floor(dez),'nota(s) de dez reais,'
, Math.floor(cinco),'nota(s) de cinco reais e', Math.floor(um),'nota(s) de um real.')

