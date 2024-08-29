import readlineSync from 'readline-sync';

function main(){
    while (true){
        let input = readlineSync.question()
        let valores = input.split(" ")
        let valor_para_remover = valores[0]
        let numeros = valores[1]
        if(valor_para_remover == '0' && numeros == '0'){
            break
        }
        numeros = '0' + numeros
        let valor = parseInt(numeros.replace(valor_para_remover,''))
        console.log(valor)
    }
}

main()