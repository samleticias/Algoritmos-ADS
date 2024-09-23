import math

def main():
    while True:
        try:
            processamento_str = input()
            numero_processos = int(input())
            numero_minimo_ciclos  = 0
            check = numero_processos
            for i in range(meu_length(processamento_str)):
                if processamento_str[i] == 'R':
                    
                    if check == numero_processos:
                        numero_minimo_ciclos += 1
                        
                    if(check == 0):
                        check = numero_processos
                        numero_minimo_ciclos += 1
                        
                    check -= 1
                elif processamento_str[i] == 'W':
                    numero_minimo_ciclos += 1
                    check = numero_processos
            print(numero_minimo_ciclos)

        except EOFError:
            break

def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho += 1
    return tamanho

main()