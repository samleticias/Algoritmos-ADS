/*
Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)

De Até Acréscimo
R$ 0,00 R$ 2.999,99 25 %
R$ 3.000,00 R$ 5.999,99 20 %
R$ 6.000,00 R$ 9.999,99 15 %
Acima de R$ 10.000,00 10 %
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let soma_salarios_atuais = 0
    let soma_salarios_reajustados = 0

    while (true) {
        const salario = get_number('Digite o salário atual R$ (ou 0 para sair): ')
        
        if (salario === 0) { // fim das informações indicado por salário = 0
            break
        }

        soma_salarios_atuais += salario

        let novo_salario = 0
        if (salario <= 2999.99){
            novo_salario = salario * 1.25
        } else if (salario >= 3000 && salario <= 5999.99){
            novo_salario = salario * 1.2
        } else if (salario >= 6000 && salario <= 9999.99){
            novo_salario = salario * 1.15
        } else {
            novo_salario = salario * 1.1
        }

        soma_salarios_reajustados += novo_salario
    }

    const diferenca = soma_salarios_reajustados - soma_salarios_atuais

    print(`Soma dos salários atuais: R$ ${soma_salarios_atuais.toFixed(2)}`)
    print(`Soma dos salários reajustados: R$ ${soma_salarios_reajustados.toFixed(2)}`)
    print(`Diferença entre as somas: R$ ${diferenca.toFixed(2)}`)
}

main()
