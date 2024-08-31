def main():
    quantidade_casos_teste = int(input())
    
    for _ in range(quantidade_casos_teste):
        mensagem_oculta = input().strip()
    
        mensagem_desvendada = ''.join([palavra[0] if meu_length(palavra) > 0 else '' for palavra in mensagem_oculta.split(' ')])
    
        print(mensagem_desvendada)

def meu_length(texto):
    tamanho = 0
    for caracter in texto:
        tamanho += 1
    return tamanho
        
main()