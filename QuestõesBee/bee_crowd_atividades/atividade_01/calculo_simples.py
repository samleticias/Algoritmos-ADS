def calcular_valor_total(codigo, quantidade, valor_unitario):
    return quantidade * valor_unitario

def main():
    codigo_peca1, num_peca1, valor_unitario_peca1 = map(float, input().split())

    codigo_peca2, num_peca2, valor_unitario_peca2 = map(float, input().split())

    valor_total_peca1 = calcular_valor_total(codigo_peca1, num_peca1, valor_unitario_peca1)
    valor_total_peca2 = calcular_valor_total(codigo_peca2, num_peca2, valor_unitario_peca2)

    valor_total = valor_total_peca1 + valor_total_peca2

    print(f'VALOR A PAGAR: R$ {valor_total:.2f}')

main()


