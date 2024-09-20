// Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
// nascimento e a data (dia, mês e ano) atual.
import { question } from 'readline-sync'
import { get_number } from './utils';

function main() {
    const data_nasc = get_number("Digite a data de nascimento (formato: YYYY-MM-DD): ")
    const data_atual = new Date()

    const idade = calcular_idade(data_nasc, data_atual)

    console.log(`Idade: ${idade.anos} anos, ${idade.meses} meses e ${idade.dias} dias.`)
}

function calcular_idade(data_nasc, data_atual) {
    const nascimento = new Date(data_nasc)
    const atual = new Date(data_atual)

    const diferencaEmMilissegundos = atual - nascimento

    const anos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
    const meses = Math.floor((diferencaEmMilissegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const dias = Math.floor((diferencaEmMilissegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    return { anos, meses, dias }
}

main();
