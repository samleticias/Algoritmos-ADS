def main():
    while True:
        try:
            texto = input()
            i = 0
            b = 0
            texto_html = ''
            for j in range(len(texto)):
                
                if(texto[j] == '_'):
                    if(i == 0):
                        texto_html += '<i>'
                        i = 1
                    else:
                        texto_html += '</i>'
                        i = 0
                
                elif(texto[j] == '*'):
                    if(b == 0):
                        texto_html += '<b>'
                        b = 1
                    else:
                        texto_html += '</b>'
                        b = 0
                        
                else:
                    texto_html += texto[j]
                    
            print(texto_html)
            
        except EOFError:
            break

main()