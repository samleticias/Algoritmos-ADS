def main():
    while True:
        print("Escolha uma opção:")
        print("1. Converter horário militar para AM/PM")
        print("2. Converter horário AM/PM para militar")
        print("3. Sair")
        
        opcao = input("Opção: ")
        
        if opcao == '1':
            horario_militar = input("Digite o horário militar (hh:mm:ss): ")
            print("Horário AM/PM:", converter_horario_militar_para_ampm(horario_militar))
        elif opcao == '2':
            horario_ampm = input("Digite o horário AM/PM (hh:mm:ssAM ou hh:mm:ssPM): ")
            print("Horário militar:", converter_horario_ampm_para_militar(horario_ampm))
        elif opcao == '3':
            break
        else:
            print("Opção inválida")

def converter_horario_ampm_para_militar(time_str):
    hhmmss = time_str[:-2]
    periodo = time_str[-2:]
    
    hh, mm, ss = map(int, hhmmss.split(':'))
    
    if periodo == "PM" and hh != 12:
        hh += 12
    elif periodo == "AM" and hh == 12:
        hh = 0
    
    return f"{hh:02}:{mm:02}:{ss:02}"


def converter_horario_militar_para_ampm(time_str):
    hh, mm, ss = map(int, time_str.split(':'))
    
    periodo = "AM" if hh < 12 else "PM"
    
    hh = hh % 12
    if hh == 0:
        hh = 12
    
    return f"{hh:02}:{mm:02}:{ss:02}{periodo}"


if __name__ == "__main__":
    main()
