// Enem Funcionalidades
import { get_size, meu_push } from './util/my_vetores_utils.js'
import { print } from './util/my_entsai_utils.js'
import { obter_estados } from './enem_utils.js'
import { texto_para_caixa_baixa } from './util/my_string_utils.js'
import { mapear, filtrar, bubble_sort, quick_sort, reduzir } from './util/my_refactor_utils.js'

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
    const agrupamento = []

    for (let i = 0; i < get_size(escolas); i++) {
        const escola = escolas[i]
        const estado = escola.estado
        const media = parseFloat(escola.media_obj)

        let estado_ja_encontrado = false

        for (let j = 0; j < get_size(agrupamento); j++) {
            if (agrupamento[j][0] === estado) {
                agrupamento[j][1] += media
                agrupamento[j][2] += 1
                estado_ja_encontrado = true
                break
            }
        }

        if (!estado_ja_encontrado) {
            meu_push(agrupamento, [estado, media, 1])
        }
    }

    const medias_notas_por_estado = mapear(agrupamento, linha => {
        const [estado, total_notas, quantidade] = linha
        return { estado, media: (total_notas / quantidade).toFixed(2) }
    })

    return medias_notas_por_estado
}

// funcao para exibir o ranking de estados por media das notas
export function mostrar_ranking_estados_por_media(escolas, label = '\n>>> Ranking ENEM por Estado <<<\n') {
    const medias_notas_por_estado = agrupar_escolas_por_estado_e_calcular_media(escolas)
    
    const estados_ordenados_por_media = bubble_sort(medias_notas_por_estado, (a, b) => b.media - a.media)

    print(label)
    let resultado = '---------------------------------\n'
    resultado += '|  Estado    |  Média das Notas |\n'
    resultado += '---------------------------------\n'
    
    for (let i = 0; i < get_size(estados_ordenados_por_media); i++) {
        const { estado, media } = estados_ordenados_por_media[i]
        resultado += `|    ${estado}      |      ${media}      |\n`
    }
    resultado += '---------------------------------\n'

    print(resultado)
}

// funcao para obter a melhor escola por area e estado
export function obter_melhor_escola_por_area_e_estado(escolas, area_escolhida, indice_estado) {
    const areas = ['nota_linguagens', 'nota_matematica', 'nota_naturezas', 'nota_humanas', 'nota_redacao']
    const estados = obter_estados(escolas)
    const estado_escolhido = estados[indice_estado]

    const escolas_filtradas = filtrar(escolas, escola => escola.estado === estado_escolhido)

    let escolas_ordenadas = bubble_sort(escolas_filtradas, (a, b) => b[areas[area_escolhida - 1]] - a[areas[area_escolhida - 1]])
    return escolas_ordenadas[0] 
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
    
    let escolas_ordenadas = quick_sort(escolas_mapeadas, (a, b) => b.nota - a.nota)
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

// funcao para mostrar melhor escola por area e estado
export function mostrar_dados_melhor_escola(melhor_escola, area_escolhida) {
    const areas = ['nota_linguagens', 'nota_matematica', 'nota_naturezas', 'nota_humanas', 'nota_redacao']
    const nota = parseFloat(melhor_escola[areas[area_escolhida - 1]].replace(',', '.')).toFixed(2)

    const e = `
    > Melhor Escola na Área ${areas[area_escolhida - 1]} no Estado de ${melhor_escola.estado}
    | Escola: ${melhor_escola.nome}
    | Código: ${melhor_escola.codigo}
    | Cidade: ${melhor_escola.cidade}
    | Estado: ${melhor_escola.estado}
    | Tipo: ${melhor_escola.tipo}
    | Nível: ${melhor_escola.nivel}
    | Nota (${areas[area_escolhida - 1]}): ${nota}`
    print(e)
}

// funcao para listar escolas por estado ordenadas por renda
export function listar_escolas_por_estado_e_renda(escolas, indice_estado) {
    const estados = obter_estados(escolas)
    const estado_escolhido = estados[indice_estado]

    const escolas_filtradas = filtrar(escolas, (escola => escola.estado === estado_escolhido))

    const rendas = {
        'Menos de 20%': 0,
        'De 20% a 40%': 1,
        'De 40% a 60%': 2,
        'De 60% a 80%': 3,
        '80% ou mais': 4
    }

    const escolas_ordenadas = quick_sort(escolas_filtradas, (a, b) => {
        const rendaA = rendas[a.renda] !== undefined ? rendas[a.renda] : -1
        const rendaB = rendas[b.renda] !== undefined ? rendas[b.renda] : -1
        return rendaA - rendaB
    })

    let lista_escolas = `\n>>> Escolas em ${estado_escolhido} ordenadas por renda <<<\n\n`
    lista_escolas += mapear(escolas_ordenadas, (escola => `> Escola: ${escola.nome} | Renda: ${escola.renda}`)).join('\n')
    print(lista_escolas)
}

// funcao para calcular o ranking enem por regiao do pais
export function ranking_enem_por_regiao(escolas) {
    const regioes = {
        'Norte': ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'],
        'Nordeste': ['BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
        'Centro-Oeste': ['DF', 'GO', 'MS', 'MT'],
        'Sudeste': ['ES', 'MG', 'RJ', 'SP'],
        'Sul': ['PR', 'RS', 'SC']
    }

    const medias_por_regiao = {}

    for (const regiao in regioes) {
        medias_por_regiao[regiao] = {
            total: 0,
            quantidade: 0
        }
    }

    for (let i = 0; i < get_size(escolas); i++) {
        const escola = escolas[i]
        const media = parseFloat(escola.media_obj.replace(',', '.'))
        for (const regiao in regioes) {
            for (let j = 0; j < get_size(regioes[regiao]); j++) {
                if (escola.estado === regioes[regiao][j]) {
                    medias_por_regiao[regiao].total += media
                    medias_por_regiao[regiao].quantidade += 1
                    break
                }
            }
        }
    }

    const ranking = []
    for (const regiao in medias_por_regiao) {
        const { total, quantidade } = medias_por_regiao[regiao];
        const media = quantidade > 0 ? (total / quantidade).toFixed(2) : 0
        meu_push(ranking, { regiao, media })
    }

    const ranking_ordenado = quick_sort(ranking, (a, b) => b.media - a.media)

    print('>>> Ranking ENEM por Região do País: <<<')
    print('----------------------------------------')
    for (let i = 0; i < get_size(ranking_ordenado); i++) {
        const { regiao, media } = ranking_ordenado[i]
        print(`Região: ${regiao} | Média: ${media}`)
    }
    print('----------------------------------------')
}

// funcao para buscar escola especifica por parte do nome
export function busca_escola_especifica_por_parte_nome(escolas, parte_nome) {
    const parte_nome_lower = texto_para_caixa_baixa(parte_nome)

    let escola_procurada = filtrar(escolas, escola => 
        texto_para_caixa_baixa(escola.nome).indexOf(parte_nome_lower) !== -1
    )
    return escola_procurada[0]
}

// funcao para comparar media por tipos de escola publica e privada
export function media_por_tipo_escola(escolas) {
    const tipos = []

    for (let i = 0; i < get_size(escolas); i++) {
        const tipo = escolas[i].tipo
        if (!filtrar(tipos, t => t === tipo).length) {
            meu_push(tipos, tipo)
        }
    }

    const medias_por_tipo = mapear(tipos, tipo => {
        const notas = filtrar(escolas, escola => escola.tipo === tipo)
        const medias = mapear(notas, escola => parseFloat(escola.media_obj.replace(',', '.')))
        const media = reduzir(medias, (soma, nota) => soma + nota, 0) / notas.length

        return { tipo, media: media.toFixed(2) }
    })

    const medias_ordenadas = quick_sort(medias_por_tipo, (a, b) => b.media - a.media)

    return medias_ordenadas
}

// funcao para contar quantidade de escolas por cada categoria de renda
export function conta_escolas_por_renda(escolas) {
    const rendas = mapear(escolas, escola => escola.renda)

    const contagem = reduzir(rendas, (contador, renda) => {
        contador[renda] = (contador[renda] || 0) + 1
        return contador
    }, {})

    const qtd_escolas_por_renda = []
    for (let renda in contagem) {
        meu_push(qtd_escolas_por_renda, [renda, contagem[renda]])
    }

    const escola_renda = quick_sort(qtd_escolas_por_renda, (a, b) => b[1] - a[1])

    const qtd_escolas_ordenada = {}
    for (let i = 0; i < get_size(escola_renda); i++) {
        qtd_escolas_ordenada[escola_renda[i][0]] = escola_renda[i][1]
    }

    return qtd_escolas_ordenada
}




























