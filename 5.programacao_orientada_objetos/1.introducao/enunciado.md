## Exercício 1
Um comerciante decidiu te contratar para fazer um software que o permita calcular o valor a ser pago pelos seus clientes. Na loja dele os produtos possuem códigos de 1 a 40 e os preços dos mesmos são dados pela tabela a seguir.
Código | Preço |
---|---|
1 a 10 | R$ 10,00 |
11 a 20 | R$ 15,00 |
21 a 30 | R$ 20,00 |
31 a 40 | R$ 30,00 |

Como estratégia de marketing ele oferece descontos de acordo com o valor da compra. Quanto mais um cliente compra, maior é o desconto. Ele segue a tabela de descontos dada abaixo.

Compra | Desconto |
---|---|
Abaixo de RS 250,00 | 5% |
De RS 250,00 a RS 500,00 | 10% |
Acima de RS 500,00 | 15% |

O comerciante lhe pediu que o programa receba o código e a quantidade de um produto e exiba: o preço unitário do produto, o valor bruto da compra, o valor do desconto e o preço final a ser pago pelo cliente. Obs: considere que serão digitados apenas códigos de produto válidos (1 a 40) e quantidades positivas.
### Entradas:
Código do produto (1 a 40).
Quantidade a ser comprada do produto.
### Saídas:
- Preço unitário do produto comprado.
- Valor bruto da compra (preço unitário x quantidade).
- Valor do desconto a ser concedido.
- Preço final a ser pago pelo consumidor.
### Exemplo de Entrada:
Entre com o codigo: 30
Entre com a quantidade: 25 
### Exemplo de Saída:
Preco unitario: 20,00
Valor bruto: 500,00
Valor do desconto: 50,00
Preco final: 450,00
## Exercício 2
João e Pedro são dois amigos que resolveram realizar investimentos financeiros. João tem um perfil de investimento mais arrojado e, por isso, resolveu aplicar seu dinheiro em ações que, apesar do risco maior, apresentam rendimento mensal de 2,5%. Ou seja, se R$ 100 forem aplicados, após um mês o saldo será de R$ 102,50. Já o Pedro possui um perfil mais conservador e decidiu aplicar seu dinheiro na poupança, cujo rendimento é de 0,5% ao mês.
Escreva um programa que receba como entrada os valores investidos pelo João e pelo Pedro (nessa ordem) e utilize a estrutura de repetição while para calcular a quantidade de meses necessários para que o saldo do investimento do João iguale ou ultrapasse o saldo do investimento do Pedro.
### Entradas:
- Valor investido (valor maior do que zero) pelo João.
- Valor investido (valor maior do que zero) pelo Pedro.
### Saída:
- Quantidade de meses necessários para que o saldo do investimento do João iguale ou ultrapasse o saldo do investimento do Pedro.
### Exemplo de Entrada:
Entre com o valor investido pelo Joao: 3000 Entre com o valor investido pelo Pedro: 2000
Exemplo de Saída: Quantidade de meses necessarios: 0
Exemplo de Entrada:
Entre com o valor investido pelo Joao: 1000 Entre com o valor investido pelo Pedro: 1800
### Exemplo de Saída:
Quantidade de meses necessarios: 30
## Exercício 3
Faça um programa que receba uma frase e imprima a palavra dessa frase com o maior número de vogais e a quantidade de vogais dessa palavra.
Utilize vetores e a estrutura de repetição for para resolver este problema.
### Entradas:
- Frase a ser analisada (toda letras minúsculas, sem pontuações e na mesma linha).
### Saída:
- Palavra com maior número de vogais e a quantidade de vogais dessa palavra (em caso de empate, use a palavra que apareceu primeiro).
### Exemplo de Entrada 1:
Frase a ser analisada: uma vida sem desafios nao vale a pena ser vivida
### Exemplo de Saída 1:
Palavra com mais vogais: desafios Tamanho: 4
### Exemplo de Entrada 2:
Frase a ser analisada: nao vivemos para comer mas comemos para viver
### Exemplo de Saída 2:
Palavra com mais vogais: vivemos
Tamanho: 3
