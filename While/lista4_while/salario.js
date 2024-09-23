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

    let salario = get_number('Salário R$: ')

    while(salario !== 0){
        
        soma_salarios_atuais += salario

        let novo_salario = 0
        if (salario < 2999.99){
            novo_salario = salario * 1.25
        } else if (salario < 5999.99){
            novo_salario = salario * 1.2
        } else if (salario < 9999.99){
            novo_salario = salario * 1.15
        } else {
            novo_salario = salario * 1.10
        }

        soma_salarios_reajustados += novo_salario

        salario = get_number('Salário R$: ')

    }

    const diferenca = soma_salarios_reajustados - soma_salarios_atuais

    const resultado = `
    >>>>>>> SALÁRIOS <<<<<<<
    ------------------------------------------------------------
    Soma dos salários atuais: R$ ${soma_salarios_atuais.toFixed(2)}
    Soma dos salários reajustados: R$ ${soma_salarios_reajustados.toFixed(2)}
    Diferença: R$ ${diferenca.toFixed(2)}
    `

    print(resultado)
}

main()