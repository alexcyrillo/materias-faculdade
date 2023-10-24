## PRÁTICA SOBRE HERANÇA E POLIMORFISMO

Implemente em Java um sistema de gerenciamento de contatos, ou seja, uma agenda de contatos. Nessa agenda, contatos podem ser adicionados e removidos. Além disso, deve ser possível visualizar todos os contatos da agenda. Dois tipos de contatos podem fazer parte dessa agenda: pessoa física e pessoa jurídica. As pessoas físicas têm os seguintes atributos: nome (String), endereço (String), e-mail (String), cpf (String) e estado civil (String). Já as pessoas jurídicas possuem os atributos: nome (String), endereço (String), e-mail (String), cnpj (String) e inscrição estadual (int). A remoção de um contato deve ser feita a partir da informação do seu cpf (para pessoa física) ou cnpj (para pessoa jurídica). Se o cpf ou cnpj informado pelo usuário não existir, deve-se exibir uma mensagem de erro na tela. Todos os atributos de pessoa física e jurídica devem ser passados por parâmetro ao se chamar o método responsável por adicionar o contato na agenda. O sistema deve ter uma classe denominada Menu que conterá toda a interação com o usuário por meio de um menu de opções, como o apresentado a seguir. Somente essa classe Menu poderá usar comandos para realizar leituras de dados (entradas) e impressão de dados (saídas) na tela. O sistema também deve incluir uma classe denominada App (que conterá o método main) apenas para iniciar a execução do sistema. 

### Menu de Opções
1	- Cadastrar uma pessoa física
2	- Cadastrar uma pessoa jurídica
3	- Remover um contato
4	- Imprimir dados da agenda
5	- Sair

O seu sistema de gerenciamento de contatos deve fazer uso de:
*	Herança
*	Polimorfismo
*	Método toString
*	ArrayList
