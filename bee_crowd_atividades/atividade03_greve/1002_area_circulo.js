var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

const raio = parseFloat(lines[0]);

const area = pi * raio * raio;

console.log("A=" + area.toFixed(4));
