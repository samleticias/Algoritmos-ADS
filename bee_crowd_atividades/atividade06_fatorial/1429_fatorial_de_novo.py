# 719ACM é equivalente a 5310, já que 7 × 3! + 1 × 2! + 9 × 1! = 53.
def main():
    numero_acm = int(input())
    while (numero_acm != 0):
        digitos_acm = [int(digito) for digito in str(numero_acm)]
        numero_decimal = converter_acm_para_decimal(digitos_acm)
        print(numero_decimal)
        numero_acm = int(input())

def converter_acm_para_decimal(lista):
    soma_conversao = 0
    tamanho = len(lista)
    for i in range(tamanho):
        fatorial_atual = obter_fatorial_de(tamanho - i)
        soma_conversao += lista[i] * fatorial_atual
    return soma_conversao

def obter_fatorial_de(N):
    fatorial = 1
    for i in range (1, N + 1):
        fatorial *= i
    return fatorial

main()