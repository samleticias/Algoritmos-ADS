import { get_number, print } from '../utils/io_utils.js'

function main(){
    const consumo_kwh = get_number('Consumo KWh: ')

    const valor_tarifado = obter_valor_tarifa_consumo_kwh(consumo_kwh)
    const icms = obter_icms(valor_tarifado)
    const pis_confis = obter_pis_confis(valor_tarifado)
    const bandeira = verificar_bandeira(consumo_kwh)
    const taxa_iluminacao_publica = obter_taxa_iluminacao_publica(consumo_kwh, valor_tarifado)

    const talao = `
    >>>>>>>> TALÃO DE ENERGIA <<<<<<<<
    --------------------------------------------------
    Consumo KWh: ${consumo_kwh}
    Valor Faturado R$: ${valor_tarifado.toFixed(2)}
    Bandeira R$: ${bandeira.toFixed(2)}
    ICMS (25%) R$: ${icms.toFixed(2)}
    PIS/CONFIS (15%) R$: ${pis_confis.toFixed(2)}
    Taxa Iluminação Pública R$: ${taxa_iluminacao_publica.toFixed(2)}
    --------------------------------------------------
    `

    print(talao)

}

function obter_taxa_iluminacao_publica(consumo_kwh, valor_tarifado){
    // A taxa de iluminação pública é cobrada apenas para os consumidores que passarem de 80KWh por mês, e custa 6% do valor tarifado (antes do impostos)
    if (consumo_kwh > 80){
        return valor_tarifado * 0.06
    } else {
        return 0
    }
}

function obter_valor_tarifa_consumo_kwh(consumo_kwh){
    if (consumo_kwh <= 30){
        return 0
    } else if (consumo_kwh <= 100){
        return consumo_kwh * 0.59
    } else {
        return consumo_kwh * 0.75
    }
}

function verificar_bandeira(consumo_kwh){
    //  Vermelha Patamar 2, que significa que a cada 100 KWh de consumo será acrescido uma taxa extra de R$ 8,00.
    if (consumo_kwh > 100){
        return Math.floor(consumo_kwh / 100) * 8
    } else {
        return 0
    }
}

function obter_icms(valor_tarifado){
    // Sobre o valor tarifado/apurado são 25% de ICMS e 15% de PIS/CONFIS.
    const taxa_icms = valor_tarifado * 0.25
    return taxa_icms
}

function obter_pis_confis(valor_tarifado){
    // Sobre o valor tarifado/apurado são 25% de ICMS e 15% de PIS/CONFIS.
    const taxa_pis_confis = valor_tarifado * 0.15
    return taxa_pis_confis
}


main()