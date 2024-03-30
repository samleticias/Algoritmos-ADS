N = int(input())


if 2 < N < 1000:
    contador = 1
    
    while contador <= 10:
        resultado = contador * N
        print(f"{contador} x {N} = {resultado}")
        contador += 1
else:
    print("fora do intervalo permitido")