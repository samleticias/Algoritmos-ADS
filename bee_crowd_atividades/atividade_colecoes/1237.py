def main():
    while True:
        primeira_string = input()
        segunda_string = input()
        maior_substring = obter_maior_substring_comum(primeira_string, segunda_string)
        print(meu_length(maior_substring))

def obter_maior_substring_comum(primeira_string, segunda_string):
    max_len = 0
    max_substring = ""
    for i in range(meu_length(primeira_string)):
        for j in range(meu_length(segunda_string)):
            k = 0
            while (i + k < meu_length(primeira_string) and 
                   j + k < meu_length(segunda_string) and 
                   primeira_string[i + k] == segunda_string[j + k]):
                k += 1
            if k > max_len:
                max_len = k
                max_substring = primeira_string[i:i + k]
    return max_substring

def meu_length(texto):
    tamanho = 0
    for elemento in texto:
        tamanho = tamanho + 1
    return tamanho

main()
