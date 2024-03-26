maior_valor = -1
posicao = 0
contador = 1

while contador <= 100:
    valor = int(input())
    
    if valor > maior_valor:
        maior_valor = valor
        posicao = contador
    
    contador += 1

print(maior_valor)
print(posicao)