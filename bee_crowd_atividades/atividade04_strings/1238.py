def main():
    qtd_casos_teste = int(input())

    for _ in range(qtd_casos_teste):
        caso = input()
        texto_fatiado = quebrar_em_duas(caso)
        texto_combinado = combina_letras(texto_fatiado[0], texto_fatiado[1])
        print(texto_combinado)

def quebrar_em_duas(s):
    espaco_index = s.find(' ')
    
    if espaco_index == -1:
        return [s, '']
    
    primeira_parte = s[:espaco_index]
    segunda_parte = s[espaco_index + 1:]

    return [primeira_parte, segunda_parte]

def combina_letras(primeira_string, segunda_string):
    nova_palavra = ''
    comprimento_maximo = max(len(primeira_string), len(segunda_string))

    for i in range(comprimento_maximo):
        if i < len(primeira_string):
            nova_palavra += primeira_string[i]
        if i < len(segunda_string):
            nova_palavra += segunda_string[i]
    
    return nova_palavra

if __name__ == "__main__":
    main()
