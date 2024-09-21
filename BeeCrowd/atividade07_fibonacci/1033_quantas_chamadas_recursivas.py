def calcula_chamadas_fib(n):
    chamadas = [0] * (n + 1)
    
    if n >= 0:
        chamadas[0] = 1  # fib(0) tem 1 chamada
    if n >= 1:
        chamadas[1] = 1  # fib(1) tem 1 chamada
    
    for i in range(2, n + 1):
        chamadas[i] = chamadas[i - 1] + chamadas[i - 2] + 1
    
    return chamadas[n]

def ultimo_digito_na_base(valor, base):
    return valor % base

def mapear(colecao, funcao_transformadora):
    for i in range(len(colecao)):
        colecao[i] = funcao_transformadora(colecao[i])
    return colecao

def main():
    caso = 1
    while True:
        n , b = mapear(input().split(), int)
        if n == 0 and b == 0:
            break
        
        num_chamadas = calcula_chamadas_fib(n)
        
        ultimo_digito = ultimo_digito_na_base(num_chamadas, b)
        
        print(f"Case {caso}: {n} {b} {ultimo_digito}")
        
        caso += 1

if __name__ == "__main__":
    main()
