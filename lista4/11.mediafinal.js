/* 
Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10


Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.
*/
import { get_number, print } from '../utils/io_utils.js'

function main(){
    let quantidade_alunos = 0
    let total_aprovados = 0
    let total_reprovados = 0

    while (true) {
        const matricula_aluno = get_number('Digite a matrícula do aluno (ou 0 para sair): ')
        if (matricula_aluno === 0) { // fim das informações indicado por matrícula = 0
            break
        }
        const nota1 = get_number('Digite a primeira nota: ')
        const nota2 = get_number('Digite a segunda nota: ')
        const nota3 = get_number('Digite a terceira nota: ')

        quantidade_alunos++

        // Média Final = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10
        const media_aluno = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

        if (media_aluno >= 7) {
            total_aprovados++
        } else {
            total_reprovados++
        }

        print('************ FINAL DE ANO ************')
        print('--------------------------------------')
        print(`Total de alunos: ${quantidade_alunos}`)
        print(`Total de aprovados: ${total_aprovados}`)
        print(`Total de reprovados: ${total_reprovados}`)
        print('--------------------------------------')
    }
}

main()