// Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
//Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
//algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
import { get_number, print } from '../utils/io_utils.js'

function main(){
    const emprestimo = 3000
    const pagamento_dia_util = 200
    const juro_diario = 0.0085 // 0.85%

    let saldo_nao_pago = emprestimo
    let quantidade_dias_uteis = 0

    while (saldo_nao_pago > 0) {
        saldo_nao_pago -= pagamento_dia_util
        saldo_nao_pago += saldo_nao_pago * juro_diario

        quantidade_dias_uteis++
    }

    print(`Dias úteis necessários para concluir o pagamento do empréstimo: ${quantidade_dias_uteis}`)
}

main()