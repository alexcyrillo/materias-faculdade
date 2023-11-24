# Trabalho de Engenharia de Software
  Trabalho final da matéria de engenharia de software


## Sobre
  O Sistema de Gestão para Loja de Celulares é uma aplicação desenvolvida para simplificar a administração de estoque e o registro de vendas em uma loja de dispositivos móveis. Ele automatiza tarefas que anteriormente eram realizadas manualmente, proporcionando maior eficiência e organização nas operações do negócio.

## Funcionalidades

### Painel de controle
  - O painel inicial apresenta uma visão geral do estado atual do estoque, vendas recentes e resumo dos clientes cadastrados.

### Gestão de Estoque 
  #### Lista de produtos
  - Permite visualizar todos os produtos disponíveis, com detalhes como nome, categoria, quantidade em estoque, preço unitário, etc.
  - Opções para adicionar, editar ou excluir produtos.
  - Barra de busca para localizar produtos rapidamente.
  - Adicionar/Editar Produto: Formulário para inserir informações do produto, como nome, categoria, preço, quantidade inicial em estoque, etc.
  - Histórico de Movimentação de Estoque: Registra todas as operações de entrada e saída de produtos, com data, descrição e quantidade.
    
### Registro de Vendas 
  #### Nova Venda
  - Permite adicionar produtos ao carrinho de compras.
  - Opção para selecionar cliente (ou cadastrar um novo cliente).
  - Calcula automaticamente o total da venda.

  #### Histórico de Vendas 
  - Lista todas as vendas realizadas, com detalhes como data, cliente, produtos vendidos e valor total.


## Regras de uso para Git

### Commit
- A mensagem de commit DEVE ser prefixado com um tipo, que consiste em um substantivo, feat, fix, etc., seguido por um escopo OPCIONAL, símbolo OPCIONAL !, e OBRIGATÓRIO terminar com dois-pontos e um espaço.

~~~
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
~~~

#### &lt;tipo&gt;
##### build 
- DEVE ser usado quando um commit afeta a build do sistema ou as dependências externas (examplos: npm, yarn).

##### docs
- DEVE ser usado quando um commit realiza uma mudança na documentação apenas.

##### feat
- DEVE ser usado quando um commit adiciona um novo recurso.

##### fix
- DEVE ser usado quando um commit representa a correção de um problema.

##### perf
- DEVE ser usado quando um commit provém de uma melhora de performance.

##### refactor
- DEVE ser usado quando um commit realiza apenas a refatoração de código, sem correção de bugs ou adicionar novos recursos.

##### test
- DEVE ser usado quando um commit adiciona novos testes ou corrige algum previamente existente.

##### Exemplos
###### Mensagem de commit com descrição e modificação que quebra a compatibilidade no rodapé
      feat: permitir que o objeto de configuração fornecido estenda outras configurações

      BREAKING CHANGE: a chave `extends`, no arquivo de configuração, agora é utilizada para estender outro arquivo de configuração

###### Mensagem de commit com ! para chamar a atenção para quebra a compatibilidade
      feat!: envia email para o cliente quando o produto é enviado

###### Mensagem de commit com escopo e ! para chamar a atenção para quebra a compatibilidade
      feat(api)!: envia email para o cliente quando o produto é enviado

###### Mensagem de commit com ! e BREAKING CHANGE no rodapé
      chore!: remove suporte para Node 6

      BREAKING CHANGE: refatorar para usar recursos do JavaScript não disponíveis no Node 6.

###### Mensagem de commit sem corpo
      docs: ortografia correta de CHANGELOG

###### Mensagem de commit com escopo
      feat(lang): adiciona tradução para português brasileiro

###### Mensagem de commit de uma correção utilizando número de ticket (opcional)
      fix: corrige pequenos erros de digitação no código


#### &lt;escopo&gt;
- PODE ser fornecido após um tipo. 
- Um escopo DEVE consistir em um substantivo que descreve uma seção da base de código entre parênteses, por exemplo, fix(parser): .

#### &lt;descrição&gt;
- É um breve resumo das alterações de código, por exemplo, fix: problema na interpretação do array quando uma string tem vários espaços.
- DEVE existir depois do espaço após o prefixo tipo/escopo. 

#### &lt;corpo&gt;
- Uma mensagem de commit mais longa que PODE ser fornecido após a descrição curta, fornecendo informações contextuais adicionais sobre as alterações no código. 
- DEVE começar depois de uma linha em branco após a descrição.
- Um corpo de mensagem de commit é livre e PODE consistir em infinitos parágrafos separados por uma nova linha.

#### &lt;rodapé&gt;
- PODE(M) ser fornecidos um ou mais rodapés, uma linha em branco após o corpo. 
- Cada rodapé DEVE consistir em um token de palavra, seguido por um separador :&lt;espaço&gt; ou &lt;espaço&gt;#, seguido por um valor de uma string.
- Um token de rodapé DEVE usar - no lugar de espaços em branco, por exemplo, Acked-by (isso ajuda a diferenciar a seção de rodapé de um corpo de vários parágrafos). Uma exceção é feita para BREAKING CHANGE, que PODE também ser usado como um token.
- O valor de um rodapé PODE conter espaços e novas linhas, e a análise (parsing) DEVE terminar quando o próximo token/separador de rodapé válido for encontrado.

#### BREAKING CHANGES
- BREAKING CHANGES DEVEM ser indicadas após o tipo/escopo de uma mensagem de commit, ou como uma entrada no rodapé.
   - Se incluída como um rodapé, uma alteração de quebra DEVE consistir no texto em maiúsculas QUEBRAR ALTERAÇÃO, seguido por dois pontos, espaço e descrição, por exemplo, BREAKING CHANGE: as variáveis de ambiente agora têm precedência sobre os arquivos de configuração.
   - Se incluído no prefixo de tipo/escopo, as BREAKING CHANGES DEVEM ser indicadas por um ! imediatamente antes de :. Se o símbolo ! for usado, BREAKING CHANGE: PODE ser omitido da seção de rodapé, e a descrição da mensagem de commit DEVE ser usada para descrever a BREAKING CHANGE.
   
#### Observações
- Tipos diferentes de feat e fix PODEM ser usados em suas mensagens de commit, por exemplo: 
   > docs: documentos de referência atualizados
- As unidades de informação que compõem o Conventional Commits NÃO DEVEM ser tratadas com distinção entre maiúsculas e minúsculas pelos implementadores, com exceção de BREAKING CHANGE que DEVE ser maiúscula.
- BREAKING-CHANGE DEVE ser sinônimo de BREAKING CHANGE, quando usado como um token em um rodapé.

### Remificações (Branch)
- A ramificação principal NÃO deve ser utilizada para se iniciar uma implementação.
   - Uma nova remificação deve ser criada sempre que começar a desenvolver uma nova funcionalidade.
   - Após a funcionalidade ser implementada e testada, um solicitação de merge deve ser solicitada.
- A ramificação utilizada para o desenvolvimento de novos recursos DEVE ser nomeada utilizando a issue referente a ele, a qual possui o seu Requisito Funcional.
   - DEVE ser utilizada a função presente no GitHub, dentro da issue, na qual uma ramificação é criada e atrubuida a issue.git sta

## Regras e Práticas de Programação
- Deve-se utilizar o padrão CamelCase para nomes de variáveis, arquivos e funções.
- Variáveis, arquivos e funções devem conter nomes sugestivos que refletem seu propósito.
- Deve-se utilizar comentários para explicar detalhadamente o funcionamento do código.
- Deve-se aplicar os princípios SOLID para garantir um design de código flexível e escalável.
- Deve-se priorizar a legibilidade e simplicidade do código para garantir sua manutenibilidade.
- Deve-se utilizar blocos try-catch para tratar exceções e garantir a robustez do código.

## Estrutura de Pastas

```markdown
trabalho_pratico_engenharia_software/
│
├── padroes_adotados/
│
├── requisitos/
│   
├── implementacao/
│   ├── backend/
│   │  
│   ├── frontend/
│   │
│   ├── documentacao/
│
└── README.md
```


## Tecnologias
### Back-End
- NodeJS v18.13.0
### Banco de Dados
- `SGBD` MySQL v8.2
- `Hospedagem` DB4Free
### Front-End
- HTML 5
- CSS
- JavaScript ES6

## Autores

- [Alex Cyrillo de Sousa Borges](https://github.com/alexcyrillo)<br>
- [Lucas de Castro Nizio](https://github.com/LuckZeera)
