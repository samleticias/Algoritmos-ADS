import { question } from "readline-sync";

function main(){
    let quantidade_mulheres = 0;
    let quantidade_alunos = 0;
    let quantidade_homens = 0;
    let soma_notas_geral = 0;
    let soma_notas_mulheres = 0;
    let soma_notas_homens = 0;
    let maior_nota = -999999;
    let menor_nota = 9999999;
    let media_notas_homens = 0;
    let media_notas_mulheres = 0;
    let media_geral_turma = 0;
    let performance_homens = 0;
    let performance_mulheres = 0;

    let sexo = question('Sexo (M/F): ');

    while (sexo === 'F' || sexo === 'M'){
        quantidade_alunos++;

        let nota = get_number('Nota: ');
        soma_notas_geral += nota;

        if (sexo === 'F'){
            quantidade_mulheres++;
            soma_notas_mulheres += nota;
        } else {
            quantidade_homens++;
            soma_notas_homens += nota;
        }

        if (nota > maior_nota){
            maior_nota = nota
        }

        if (nota < menor_nota){
            menor_nota = nota
        }

        sexo = question('Sexo (M/F): ');
    }


    media_geral_turma = soma_notas_geral / quantidade_alunos;
    media_notas_mulheres = soma_notas_mulheres / quantidade_mulheres;
    media_notas_homens = soma_notas_homens / quantidade_homens;
    performance_homens = (soma_notas_homens / soma_notas_geral) * 100;
    performance_mulheres = (soma_notas_mulheres / soma_notas_geral) * 100;
    let desempenho_turma = obter_desempenho(media_geral_turma);
    let desempenho_mulheres = obter_desempenho(media_notas_mulheres);
    let desempenho_homens = obter_desempenho(media_notas_homens);


    const resultado = `
    -------------------------------------------------------------------
    Maior Nota Geral = ${maior_nota.toFixed(2)}
    Menor Nota Geral = ${menor_nota.toFixed(2)}
    Média Geral da turma = ${media_geral_turma.toFixed(2)}
    Desempenho da turma: ${desempenho_turma}
    Desempenho das mulheres: ${desempenho_mulheres}
    Desempenho dos homens: ${desempenho_homens}
    Performance dos Homens(escala 0 a 100%) = ${performance_homens.toFixed(2)}
    Performance das Mulheres (escala 0 a 100%) = ${performance_mulheres.toFixed(2)}
    -------------------------------------------------------------------
    `;

    console.log(resultado);
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

function obter_desempenho(media_notas){
    let desempenho = '';
    if (media_notas < 2.00){
        desempenho = 'Péssimo';
    } else if (media_notas < 4.00){
        desempenho = 'Ruim';
    } else if (media_notas < 7.00){
        desempenho = 'Regular';
    } else if (media_notas >= 7.00 && media_notas < 8.00){
        desempenho = 'Bom';
    } else {
        desempenho = 'Excelente';
    }
    return desempenho;
}

main()