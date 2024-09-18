// Enem Funcionalidades
import { get_size, meu_push } from './util/my_vetores_utils.js'
import { print, get_number_in_range } from './util/my_entsai_utils.js'
import { obter_estados, mostrar_escolas } from './enem_utils.js'
import { mapear, filtrar, reduzir, bubble_sort } from './util/my_refactor_utils.js'

// funcao para exibir Top N Escolas por Estado e Rede
export function top_n_escolas_estado_rede(quantidade, escolas, indice_estado, rede_escolhida) {
    const redes = ['Rede Pública', 'Rede Privada']
    const estados = obter_estados(escolas)
    const estado_escolhido = estados[indice_estado]

    const escolas_filtradas = filtrar(escolas, escola => 
        escola.estado === estado_escolhido && 
        (rede_escolhida === 1 ? escola.tipo === 'Pública' : escola.tipo === 'Privada')
    )

    bubble_sort(escolas_filtradas, (a, b) => b.media_obj - a.media_obj)

    const top_n_escolas = escolas_filtradas.slice(0, quantidade)
    print(`\n>>> Top ${quantidade} Escolas em ${estado_escolhido} (${redes[rede_escolhida - 1]}) <<<`)

    return top_n_escolas
}

// funcao para exibir top N Brasil em todas as áreas
export function top_n_brasil_todas_areas(n, escolas) {
    const escolas_para_ordenar = mapear(escolas, ({ codigo, nome, cidade, estado, tipo, nivel, media_obj }) => ({
        codigo, 
        nome, 
        cidade, 
        estado, 
        tipo, 
        nivel, 
        media_obj
    }))

    bubble_sort(escolas_para_ordenar, (a, b) => b.media_obj - a.media_obj)
    return escolas_para_ordenar.slice(0, n)
}

// funcao para obter a melhor escola por estado
export function melhor_escola_por_estado(escolas) {
    const melhores_escolas_por_estado = {}

    for (let i = 0; i < get_size(escolas); i++) {
        const escola = escolas[i]
        const { estado, nome, codigo, cidade, tipo, nivel, media_obj} = escola

        if (!melhores_escolas_por_estado[estado] || media_obj > melhores_escolas_por_estado[estado].media_obj) {
            melhores_escolas_por_estado[estado] = {
                nome,
                codigo,
                cidade,
                estado,
                tipo,
                nivel,
                media_obj
            }
        }
    }

    const melhores_escolas = []
    for (let estado in melhores_escolas_por_estado) {
        meu_push(melhores_escolas, melhores_escolas_por_estado[estado])
    }
    return melhores_escolas
}

// funcao para agrupar escolas por estado e calcular a media das notas
function agrupar_escolas_por_estado_e_calcular_media(escolas) {
    const agrupamento = {}
    for (let i = 0; i < get_size(escolas); i++) {
        const escola = escolas[i]
        const estado = escola.estado
        const media = parseFloat(escola.media_obj)

        if (!agrupamento[estado]) {
            agrupamento[estado] = { total_notas: 0, quantidade: 0 }
        }
        agrupamento[estado].total_notas += media
        agrupamento[estado].quantidade += 1
    }

    const medias_notas_por_estado = []
    for (let estado in agrupamento) {
        const { total_notas, quantidade } = agrupamento[estado]
        meu_push(medias_notas_por_estado, { estado, media: total_notas / quantidade })
    }
    return medias_notas_por_estado
}

// funcao para exibir o ranking de estados por media das notas
export function mostrar_ranking_estados_por_media(escolas, label = '\n>>> Ranking ENEM por Estado <<<\n') {
    const medias_notas_por_estado = agrupar_escolas_por_estado_e_calcular_media(escolas)
    const estados_ordenados_por_media = bubble_sort(medias_notas_por_estado, (a, b) => b.media_obj - a.media_obj)

    print(label)
    let resultado = '---------------------------------\n'
    resultado += '|  Estado    |  Média das Notas |\n'
    resultado += '---------------------------------\n'
    
    for (let i = 0; i < get_size(estados_ordenados_por_media); i++) {
        const { estado, media } = estados_ordenados_por_media[i]
        resultado += `|    ${estado}      |      ${media.toFixed(2)}      |\n`
    }
    resultado += '---------------------------------\n'

    print(resultado)
}

// funcao para obter a melhor escola por area e estado
export function obter_melhor_escola_por_area_e_estado(escolas, area_escolhida, estado_escolhido) {
    const areas = ['nota_linguagens', 'nota_matematica', 'nota_naturezas', 'nota_humanas', 'nota_redacao'];
    
    const escolas_filtradas = escolas.filter(escola => escola.estado === estado_escolhido)

    escolas_filtradas.sort((a, b) => b[areas[area_escolhida - 1]] - a[areas[area_escolhida - 1]])
    
    return escolas_filtradas[0]
}

// funcao para exibir a melhor escola por area e estado
export function melhor_escola_por_area_e_estado(escolas, estado_escolhido, area_escolhida) {    
    let melhor_escola = obter_melhor_escola_por_area_e_estado(escolas, area_escolhida, estado_escolhido)
    return melhor_escola
}

// funcao para mostrar o Top N Escolas por Área
export function mostrar_top_n_escolas_por_area(escolas, quantidade, area_escolhida) {
    const areas = [
        'nota_linguagens',
        'nota_matematica',
        'nota_naturezas',
        'nota_humanas',
        'nota_redacao'
    ]

    const escolas_filtradas = filtrar(escolas, escola => escola[areas[area_escolhida - 1]])

    const escolas_mapeadas = mapear(escolas_filtradas, escola => ({
        nome: escola.nome,
        cidade: escola.cidade,
        estado: escola.estado,
        tipo: escola.tipo,
        nota: parseFloat(escola[areas[area_escolhida - 1]].replace(',', '.')) 
    }))

    let resultado = ''
    
    let escolas_ordenadas = bubble_sort(escolas_mapeadas, (a, b) => b.nota - a.nota)
    const top_n_escolas = escolas_ordenadas.slice(0, quantidade)

    print(`\n>>> Top ${quantidade} Escolas por Área: ${areas[area_escolhida - 1]} <<<`)
    for (const escola of top_n_escolas) {
        resultado += `
        Escola: ${escola.nome} 
        | Cidade: ${escola.cidade} 
        | Estado: ${escola.estado} 
        | Tipo: ${escola.tipo} 
        | Nota (${areas[area_escolhida - 1]}): ${escola.nota.toFixed(2)}\n`
    }
    print(resultado)
}

// funcao para calcular a media nacional por área
export function media_nacional_por_area(escolas) {
    const soma_notas = {
        linguagens: 0,
        matematica: 0,
        ciencias_natureza: 0,
        humanas: 0,
        redacao: 0
    }
    const contagem = {
        linguagens: 0,
        matematica: 0,
        ciencias_natureza: 0,
        humanas: 0,
        redacao: 0
    }

    for (let escola of escolas) {
        if (escola.nota_linguagens) {
            soma_notas.linguagens += parseFloat(escola.nota_linguagens.replace(',', '.'))
            contagem.linguagens++
        }
        if (escola.nota_matematica) {
            soma_notas.matematica += parseFloat(escola.nota_matematica.replace(',', '.'))
            contagem.matematica++
        }
        if (escola.nota_naturezas) {
            soma_notas.ciencias_natureza += parseFloat(escola.nota_naturezas.replace(',', '.'))
            contagem.ciencias_natureza++
        }
        if (escola.nota_humanas) {
            soma_notas.humanas += parseFloat(escola.nota_humanas.replace(',', '.'))
            contagem.humanas++
        }
        if (escola.nota_redacao) {
            soma_notas.redacao += parseFloat(escola.nota_redacao.replace(',', '.'))
            contagem.redacao++
        }
    }

    const medias = {
        linguagens: contagem.linguagens > 0 ? (soma_notas.linguagens / contagem.linguagens).toFixed(2) : 0,
        matematica: contagem.matematica > 0 ? (soma_notas.matematica / contagem.matematica).toFixed(2) : 0,
        ciencias_natureza: contagem.ciencias_natureza > 0 ? (soma_notas.ciencias_natureza / contagem.ciencias_natureza).toFixed(2) : 0,
        humanas: contagem.humanas > 0 ? (soma_notas.humanas / contagem.humanas).toFixed(2) : 0,
        redacao: contagem.redacao > 0 ? (soma_notas.redacao / contagem.redacao).toFixed(2) : 0
    }

    print('\n>>> Média Nacional por Área <<<')
    print('---------------------------------')
    print(`Linguagens: ${medias.linguagens}`)
    print(`Matemática: ${medias.matematica}`)
    print(`Ciências da Natureza: ${medias.ciencias_natureza}`)
    print(`Ciências Humanas: ${medias.humanas}`)
    print(`Redação: ${medias.redacao}`)
    print('---------------------------------')
}

















