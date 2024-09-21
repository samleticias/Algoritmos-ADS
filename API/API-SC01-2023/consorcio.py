def main():
    # Entrada
    valor_veiculo = obter_dados('Qual o valor do veículo?\n')
    prazo = obter_dados('Qual o prazo para pagamento?\n')
    taxa_adm = float(input('Qual a taxa de administração?\n'))
    valor_lance_proposto = obter_dados('Qual o valor do lance proposto?\n')
    opcao_prazo_ou_parcela = input('Para manter prazo, digite "prazo". Para manter parcela, digite "parcela".\n')
    renda_mensal = obter_dados('Qual sua renda mensal?\n')

    # Processamento
    total_taxa_adm = calcular_total_taxa_adm(valor_veiculo,taxa_adm)
    valor_total = calcular_valor_total(valor_veiculo, total_taxa_adm)
    valor_parcelas = calcular_valor_parcelas(valor_total, prazo)
    verificao_renda = verificar_renda(valor_parcelas, renda_mensal)
    renda_minima = calcular_renda_minima(valor_parcelas)
    parcelas_ou_prazo_reduzido = nova_parcela_ou_novo_prazo(opcao_prazo_ou_parcela, valor_total, valor_parcelas, prazo, valor_lance_proposto)
    renda_necessaria_apos_lance = calcular_renda_necessario_apos_lance(opcao_prazo_ou_parcela, parcelas_ou_prazo_reduzido)
    ultima_parcela = calcular_ultima_parcela(opcao_prazo_ou_parcela, valor_lance_proposto, valor_total, prazo)
    
    # Saída
    exibir_resultados(total_taxa_adm, valor_total, valor_parcelas, parcelas_ou_prazo_reduzido,
                    renda_necessaria_apos_lance, opcao_prazo_ou_parcela, verificao_renda, renda_minima, ultima_parcela)


def obter_dados(pedido):
    dado = int(input(pedido))
    return dado

def calcular_total_taxa_adm(valor_veiculo,taxa_adm):
    total_taxa_adm = valor_veiculo*(taxa_adm/100)
    return total_taxa_adm

def calcular_valor_total(valor_veiculo, total_taxa_adm):
    valor_total = valor_veiculo + total_taxa_adm
    return valor_total

def calcular_valor_parcelas(valor_total, prazo):
    valor_parcelas = valor_total / prazo
    return valor_parcelas

def verificar_renda(valor_parcelas, renda_mensal):
    if valor_parcelas > renda_mensal*0.3:
        return 'insuficiente'
    else:
        return 'suficiente'

def calcular_renda_minima(valor_parcelas):
    renda_suficiente = valor_parcelas / 0.3
    return renda_suficiente

def nova_parcela_ou_novo_prazo(opcao_prazo_ou_parcela, valor_total, valor_parcelas, prazo, valor_lance_proposto):
    if opcao_prazo_ou_parcela == 'prazo':
        # Para manter o prazo, é preciso reduzir o valor das parcelas,
        # logo é preciso fazer a seguinte subtração: valor_total - valor_lance_proposto. 
        # Em seguida calcula-se o novo valor para as parcelas.
        novo_valor_total = valor_total - valor_lance_proposto
        novo_valor_parcelas = novo_valor_total // prazo
        return novo_valor_parcelas
    if opcao_prazo_ou_parcela == 'parcelas':
        # Para manter o valor das parcelas, devemos transformar o valor do lance em parcelas pagas,
        # então dividimos o valor do lance pelo valor das parcelas, 
        # assim descobrindo quantas parcelas podem ser quitadas utilizando o valor do lance proposto
        novo_prazo = prazo - valor_lance_proposto // valor_parcelas
        return novo_prazo
def calcular_renda_necessario_apos_lance(opcao_prazo_ou_parcela, parcelas_ou_prazo_reduzido):
    if opcao_prazo_ou_parcela == 'prazo':
        nova_renda_necessaria = parcelas_ou_prazo_reduzido / 0.3
        return f'A renda mínima necessária para resgate após o lance é de R${"%.2f" % nova_renda_necessaria}'
    else:
        return f'A renda mínima necessária continua a mesma.'

def calcular_ultima_parcela(opcao_prazo_ou_parcela, valor_lance_proposto, valor_total, prazo):
    if opcao_prazo_ou_parcela == 'prazo':
        novo_valor_total = valor_total - valor_lance_proposto
        novo_valor_parcelas = novo_valor_total // prazo
        novo_valor_ultima_parcela = novo_valor_parcelas + (novo_valor_total % prazo)
        return novo_valor_ultima_parcela

def exibir_resultados(total_taxa_adm, valor_total, valor_parcelas, parcelas_ou_prazo_reduzido,
                    renda_necessaria_apos_lance, opcao_prazo_ou_parcela, verificao_renda, renda_minima, ultima_parcela):
    print(f'O valor das parcelas será de R${"%.2f" % valor_parcelas}')
    print(f'O total a ser pago será de R${valor_total}')
    print(f'O valor total da taxa de adminstração será de R${total_taxa_adm}')
    print(f'Sua renda é {verificao_renda} para o resgate do veículo, ela deve ser no mínimo R${"%.2f" % renda_minima}')
    if verificao_renda == 'suficiente':
        print('----------------------------------------SIMULAÇÃO APÓS LANCE----------------------------------------')
        if opcao_prazo_ou_parcela == 'prazo':
            print(renda_necessaria_apos_lance)
            print(f'O novo valor das parcelas será de R${parcelas_ou_prazo_reduzido}')
            print(f'A última parcela sofrerá uma alteração, passando a ser: R${"%.2f" % ultima_parcela}')
        else:
            print(renda_necessaria_apos_lance)
            print(f'O novo prazo será de {parcelas_ou_prazo_reduzido} meses')
        print('----------------------------------------------------------------------------------------------------')
main()