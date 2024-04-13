'''
Com a chegada das olimpíadas, Amy precisa montar a melhor equipe para participar da prova de carregamento de pizzas.

Sendo extremamente carismática e preparada, Amy selecionou N dos melhores atletas da modalidade de carregamento de pizza para ajudar seu país a conquistar uma medalha.

A competição de carregamento de pizzas é bem simples. Os competidores têm de carregar p pizzas do ponto de largada até o ponto final. É isso, a prova é bem simples.

Cada membro da equipe escolhida por Amy é identificado por um número de 1 a N. Cada um deles tem uma força Ai, que significa que ele demora Ai segundos para carregar exatamente uma pizza da largada até a o ponto final e retornar para a largada novamente.

O dia em que as competições começarão está se aproximando. E com a ambiciosa meta de Amy de bater o recorde mundial, 
ela deseja saber o menor tempo que sua equipe pode carregar as p pizzas. 

Dado as informações de cada competidor na equipe de Amy, determine o tempo mínimo em que essa equipe pode completar o objetivo.
Entrada
Na primeira linha, são dados 2 números N e p, sendo o número de competidores e a quantidade de pizzas que a equipe tem que entregar.
Na próxima linha temos N números A1, A2,..., AN, sendo o tempo necessário para cada competidor carregar uma pizza e retornar ao início.
1 ≤ N ≤ 2⋅105
1 ≤ p ≤ 109
1 ≤ Ai ≤ 109 

Saída
Um único número inteiro, o tempo mínimo para a equipe concluir a tarefa.
Adicione uma quebra de linha ao final de sua resposta.

'''

def main():
    N, p = map(int, input().split())
    
    tempos = list(map(int, input().split()))
    
    tempo_minimo = (tempo_minimo_entrega(N, p, tempos)) / N
    
    print(tempo_minimo)

def tempo_minimo_entrega(N, p, tempos):
    tempos.sort()
    
    tempo_total = 0
    
    for i in range(p):
        tempo_total = max(tempo_total, tempos[i])
    
    return tempo_total


if __name__ == "__main__":
    main()


