def main():
    while True:
        valor_para_remover, numeros = input().split()
        if(valor_para_remover == '0' and numeros == '0'):
            break
        numeros = '0' + numeros
        val = int(numeros.replace(valor_para_remover,''))
        print(val)

main()