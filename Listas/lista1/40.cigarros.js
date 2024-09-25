// Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
// fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
import { question } from 'readline-sync';

// entrada
var anosFumando = Number(question("Digite o número de anos que você fuma: "));
var cigarrosDia = Number(question("Digite o número de cigarros fumados por dia: "));
var precoCarteira = Number(question("Digite o preço de uma carteira de cigarros: "));

anosFumando = parseInt(anosFumando);
cigarrosDia = parseInt(cigarrosDia);
precoCarteira = parseFloat(precoCarteira);

// processamento
var cigarrosAno = cigarrosDia * 365.25; 
var carteirasAno = cigarrosAno / 20; 
var dinheiroGasto = carteirasAno * precoCarteira * anosFumando;

// saída
console.log(`Um fumante gasta aproximadamente $${dinheiroGasto.toFixed(2)} ao longo de ${anosFumando} anos.`);