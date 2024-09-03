import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {

        Scanner in = new Scanner(System.in);

        int n = in.nextInt();
        in.nextLine(); // Consumir a nova linha após o número inteiro
        String[] dados = in.nextLine().split(" ");
        Integer[] valores = converter_vetor_string_para_int(dados);

        int menor_posicao = obterMenorPos(valores);
        int menor_valor = valores[menor_posicao];

        // saída de dados
        System.out.println("Menor valor: " + menor_valor);
        System.out.println("Posição: " + menor_posicao);

    }

    private static Integer[] converter_vetor_string_para_int(String[] colecao) {
        Integer[] resultado = new Integer[colecao.length];
        for (int i = 0; i < colecao.length; i++) {
            resultado[i] = Integer.parseInt(colecao[i]);
        }
        return resultado;
    }

    private static int obterMenorPos(Integer[] colecao) {
        int menor = 0;
        for (int i = 1; i < colecao.length; i++) {
            if (colecao[i] < colecao[menor]) {
                menor = i;
            }
        }
        return menor;
    }

}
    