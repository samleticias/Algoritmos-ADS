def main():
    chamadas = [1, 1]
    fibonacci = [0, 1]
    for i in range(2, 41):
        chamadas.append(chamadas[i-1] + chamadas[i-2] + 1)
        fibonacci.append(fibonacci[i-1] + fibonacci[i-2])
        
    qtd_casos_teste = int(input())
    while (qtd_casos_teste > 0):
        n = int(input())
        print("fib(%d) = %d calls = %d" %(n, chamadas[n]-1, fibonacci[n]))
        qtd_casos_teste -= 1

main()