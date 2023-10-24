## PRÁTICA SOBRE CONCEITOS BÁSICOS DE ORIENTAÇÃO A OBJETOS
O Teste de Tolerância à Glicose é um dos testes realizados por pacientes para determinar se estão diabéticos ou não. Nesse teste, deve-se tomar um líquido que contém glicose e, em intervalos de tempo pré-definidos, uma amostra de sangue é colhida para avaliar a taxa de glicemia do paciente (taxa de “açúcar” no sangue). O resultado médio das amostras define o diagnóstico do paciente, que pode ser:
- Glicemia normal: se resultado for menor do que 140 mg/dl;
- Risco de diabetes: se resultado ficar entre 140 e 199 mg/dl; 
- Diabetes Mellitus: se resultado for maior ou igual a 200 mg/dl.

Implemente em Java um programa que receba os dados do paciente e dos exames realizados pelo mesmo e retorne o diagnóstico. Para isso, crie uma classe denominada Paciente que contenha um atributo (nome) do tipo String para armazenar o nome do paciente e um vetor (exames) para armazenar n valores (do tipo double) de resultado da análise das amostras de sangue coletadas. Essa classe deve ter um único construtor responsável por inicializar o nome do paciente e por definir o tamanho (n) do vetor exames.

A classe Paciente também deve ter um método para cada uma das seguintes tarefas:

- Retornar o nome do paciente.
- Retornar o resultado da análise de uma amostra de sangue específica (o número da amostra deve ser passado por parâmetro).
- Retornar a média dos resultados das análises das amostras de sangue.
- Retornar o diagnóstico do paciente.
- Inserir no vetor exames o resultado da análise de uma amostra de sangue coletada, cujo valor deve ser o único parâmetro desse método. 

Vale observar que nenhum método da classe Paciente deve imprimir dados na tela.
 
Além disso, implemente uma classe denominada App que possa ser executada (contenha o método main) e dentro dela exista o código que é necessário para instanciar um objeto da classe Paciente e chamar os métodos necessários para produzir uma saída na tela como exemplificado a seguir:

### ############### RELATÓRIO FINAL ###############
Resultado médio = 138,77
Diagnóstico: Glicemia normal

Para instanciar um objeto da classe Paciente, a classe App deve conter o código responsável por solicitar ao usuário o nome do paciente, a quantidade de amostras de sangue coletadas e os resultados de cada uma das análises realizadas a partir das amostras de sangue, assim como demonstrado no exemplo a seguir:

Digite o nome do paciente: Luiz Henrique
Entre com a quantidade de amostras coletadas: 3
Insira o resultado do teste 1: 134,6
Insira o resultado do teste 2: 147,2
Insira o resultado do teste 3: 134,5
