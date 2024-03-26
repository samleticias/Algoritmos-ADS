def calcular_salario(salario_fixo, total_vendas):
    comissao = 0.15 * total_vendas
    salario = salario_fixo + comissao
    return salario

def main():
    nome = input()
    salario_fixo = float(input())
    total_vendas = float(input())  

    resultado_salario = calcular_salario(salario_fixo, total_vendas)

    print(f'TOTAL = R$ {resultado_salario:.2f}')

main()
