def calcular_salario(numero, horas, valor_por_hora):
    salario = horas * valor_por_hora
    return salario

def main():
    numero_funcionario = int(input())
    horas_trabalhadas = int(input())
    valor_por_hora = float(input())

    resultado_salario = calcular_salario(numero_funcionario, horas_trabalhadas, valor_por_hora)
    print(f'NUMBER = {numero_funcionario}')
    print(f'SALARY = U$ {resultado_salario:.2f}')

main()
