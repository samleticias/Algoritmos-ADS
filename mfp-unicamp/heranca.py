'''
Entrada
A primeira linha da entrada contém dois inteiros N e K (2 ≤ N ≤ 105, 0 ≤ K ≤ min(N-1, 1000)), representando o número de pessoas na família de Mya e a quantidade de familiares que devem ser escolhidos, respectivamente.
A segunda linha da entrada contém N-1 inteiros x_i (2 ≤  i ≤  N, 0 ≤ x_i ≤  109), representando o valor que o i-ésimo integrante da família receberá caso seja incluído no testamento.
A terceira linha da entrada contém N-1 inteiros p_i (2 ≤  i ≤  N, 1 ≤  p_i ≤  N), representando o ancestral direto do i-ésimo integrante da família.
Note que o identificador 1 representa Mya, e que ela não pode ser incluída no próprio testamento.

Saída
Imprima um único inteiro S representando o maior valor total que Mya consegue distribuir entre seus familiares. 
Caso não seja possível escolher exatamente K herdeiros, este valor deve ser zero.
'''

def main():
    N, K = map(int, input().split())




main()