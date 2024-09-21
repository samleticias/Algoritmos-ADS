import { get_positive_number, get_text, print } from "../utils/io_utils.js";


function main(){
    const peso_atual = get_positive_number("> Qual seu peso atual (em Kg)? ")
    const sexo = get_text("> Insira o sexo (M/F): ")
    const gasto_no_dia = obter_gasto_no_dia(sexo)
    const minutos_transport_para_gastar_cem = obter_tempo_transport(sexo)
    const minutos_escada_para_gastar_cem  = obter_tempo_escada(sexo)
    const quilos_a_perder = get_positive_number("> Quantos quilos você quer perder? ")
    const qtd_dias_na_semana = get_positive_number("> Quantos dias na semana irá fazer atividade física? ")
    const minutos_por_dia = get_positive_number("> Quanto tempo por dia irá treinar (em minutos)? ")

    let proporcao_transport = get_positive_number("> Qual a proporção de tempo alocado para o Transport (em %)? ")
    let proporcao_escada = get_positive_number("> Qual a proporção de tempo alocado para a Escada (em %)? ")
    while(proporcao_escada + proporcao_transport > 100 || proporcao_escada + proporcao_transport < 100){
        print("(!) Proporção inválida!")
        proporcao_transport = get_positive_number("> Qual a proporção de tempo alocado para o Transport (em %)? ")
        proporcao_escada = get_positive_number("> Qual a proporção de tempo alocado para a Escada (em %)? ")
    }

    const minutos_transport_por_dia =  calcular_minutos_por_proporcao(minutos_por_dia, proporcao_transport)
    const minutos_escada_por_dia = calcular_minutos_por_proporcao(minutos_por_dia, proporcao_escada)

    const dias_totais = calcular_qtd_dias(quilos_a_perder, minutos_transport_por_dia, minutos_escada_por_dia, gasto_no_dia, minutos_transport_para_gastar_cem, minutos_escada_para_gastar_cem)
    const semanas_totais = calcular_qtd_semanas(dias_totais, qtd_dias_na_semana)

    const resultado = 
    `
    ---------------------------------------------------
    Quantidade de semanas: ${semanas_totais}
    Minutos no transport por dia: ${minutos_transport_por_dia}
    Minutos na escada por dia: ${minutos_escada_por_dia}
    ---------------------------------------------------
    `

    print(resultado)
}

function obter_gasto_no_dia(sexo){
    if(sexo === "M"){
        return 2400
    } else {
        return 2000
    }
}

function obter_tempo_transport(sexo){
    if(sexo === "M"){
        return 5
    } else {
        return 6
    }
}

function obter_tempo_escada(sexo){
    if(sexo === "M"){
        return 7
    } else {
        return 8
    }
}

function calcular_qtd_dias(quilos_a_perder, minutos_transport_por_dia, minutos_escada_por_dia, gasto_por_dia, minutos_transport_para_gastar_cem, minutos_escada_para_gastar_cem){
    // 1kg = 7000cal a serem gastas
    let calorias_totais_a_perder = quilos_a_perder * 7000
    let qtd_dias = 0
    while(calorias_totais_a_perder > 0){
        calorias_totais_a_perder -= calcular_gasto_atividade(minutos_transport_por_dia, minutos_transport_para_gastar_cem)
        calorias_totais_a_perder -= calcular_gasto_atividade(minutos_escada_por_dia, minutos_escada_para_gastar_cem)
        calorias_totais_a_perder -= gasto_por_dia
        qtd_dias++;
    }
    return qtd_dias;
}

function calcular_minutos_por_proporcao(minutos, proporcao){
    return minutos * (proporcao/100)
}

function calcular_gasto_atividade(minutos, tempo_para_gastar){
    return (minutos / tempo_para_gastar) * 100
}

function calcular_qtd_semanas(qtd_dias, qtd_dias_na_semana){
    return qtd_dias / qtd_dias_na_semana
}

main()