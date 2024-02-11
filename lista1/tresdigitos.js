import { question } from 'readline-sync'
console.log('... Soma dos três dígitos ...')

// entrada
var numero = Number(question('Digite um número inteiro composto por três dígitos: '))

// processamento
if (numero >= 100 && numero <= 999) {
    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;
  
    var soma = centena + dezena + unidade;

// saída
    console.log(`A soma dos dígitos de ${numero} é ${soma}.`);
  } else {
    console.log("Por favor, insira um número de 3 dígitos.");
  }
