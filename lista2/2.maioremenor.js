import { question } from 'readline-sync';

function main() {
  console.log('|**** NÚMEROS ****|');

  const n1 = get_number('Primeiro número: ');
  const n2 = get_number('Segundo número: ');

  let maior = verificar_maior(n1, n2);
  let menor = verificar_menor(n1, n2);

  console.log('O maior número é ' + maior + ' e o menor número é ' + menor);
}

function get_number(texto) {
  const numero = Number(question(texto));
  return numero;
}

function verificar_maior(n1, n2) {
  let maior = 0;

  if (n1 > n2) {
    maior = n1;
  } else {
    maior = n2;
  }
  return maior;
}

function verificar_menor(n1, n2) {
  let menor = 0;

  if (n1 < n2) {
    menor = n1;
  } else {
    menor = n2;
  }
  return menor;
}

main();
