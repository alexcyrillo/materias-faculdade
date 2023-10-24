## PRÁTICA SOBRE HERANÇA E POLIMORFISMO

Seguindo as boas práticas da programação orientada a objetos, implemente em Java um sistema que realize a simulação de investimentos em diferentes tipos de aplicações financeiras para os clientes de um banco. Nesse banco, existem três tipos de aplicações possíveis para um cliente: poupança, CDB e ações. 

A aplicação em poupança é caracterizada somente pelo valor a ser aplicado (double), pela taxa Selic (double no intervalo [0;100]) e pela TR (double no intervalo [0;100]). O rendimento mensal de uma aplicação em poupança (em percentual) é calculado da seguinte maneira: rendimento = 0,7 * taxa Selic + TR.

A aplicação em CDB é caracterizada somente pelo valor a ser aplicado (double) e pela taxa CDI (double no intervalo [0;100]). Nessa aplicação, o rendimento mensal (em percentual) é calculado da seguinte forma:  rendimento = 1,2 * taxa CDI

Por fim, a aplicação em ações é caracterizada somente pelo valor a ser aplicado (double), pelo preço da ação no início do mês anterior à aplicação (double) e pelo preço da ação no final do mês anterior à aplicação (double). O rendimento mensal (em percentual) desse tipo de aplicação é calculado da seguinte maneira: rendimento = (preço da ação no final do mês/preço da ação no início do mês) * 100 – 100 

A interação do usuário com o sistema deve ser realizada a partir de um menu de opções apresentado na tela. Para isso, inicialmente crie uma classe denominada Menu que contenha o método executar para realizar as seguintes tarefas enquanto o usuário não escolhe a opção de sair do sistema:

1)	Chamar o método exibirOpcoes, o qual é responsável somente por apresentar as opções de menu para o usuário (ver o exemplo a seguir);

2)	Ler a opção escolhida pelo usuário;

3)	Chamar o método executarOpcao, o qual é responsável somente por chamar métodos específicos para executar cada opção existente no menu. Utilize a estrutura switch/case para implementar esse método que terá como parâmetro apenas o valor inteiro correspondente à opção escolhida pelo usuário.

Nesse sistema o usuário informa os seguintes dados para que sejam realizadas as simulações das aplicações:

- Valor inicial a ser investido;
- Tempo que o dinheiro ficará investido (em meses);
- Taxa Selic e TR (para poupança); 
- Taxa CDI (para CDB);
- Preços inicial e final da ação (para ações).

A partir dos dados fornecidos pelo usuário o sistema calcula e imprime na tela o valor final que seria obtido para cada tipo de aplicação, assim como apresentado no exemplo a seguir.

### ###### SIMULAÇÃO ######
1	- Investimento em poupança
2	- Investimento em CDB
3	- Investimento em ação
4	- Sair
Escolha a sua opcao: 1
Entre com o valor da taxa Selic em %: 9
Entre com o valor da taxa referencial (TR) em %: 3.5
Entre com o valor a ser investido: 100
Entre com a duração da aplicação em meses: 3
Valor final para investimento em poupanca: R$ 132,38

### ###### SIMULAÇÃO ######
1	- Investimento em poupança
2	- Investimento em CDB
3	- Investimento em ação
4	- Sair
Escolha a sua opcao:

Esse sistema deve ter uma classe denominada App que possa ser executada (contenha o método main) e dentro dela exista o código apenas para criar um objeto da classe Menu e, em seguida, chamar o método executar. Toda a interação com o usuário, ou seja, a leitura de dados e a impressão de dados na tela deve ser realizada única e exclusivamente a partir dos métodos da classe Menu. 
