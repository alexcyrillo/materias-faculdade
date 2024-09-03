describe('Visualizar Vendas', () => {
    it('Deve exibir as vendas feitas na loja', () => {
        // Visite a página de vendas no seu sistema
        cy.visit('http://localhost:5173/vendas');
        // Clique no último botão com a classe 'style-Botao'
        // Utilizando o { multiple: true } para lidar com múltiplos elementos da mesma classe
        cy.get('button.style-Botao').last().click();
        // Verifique se a URL foi alterada para incluir '/lista'
        cy.url().should('include', '/lista');
        // Verifique se há elementos <td> visíveis na página, indicando a presença de vendas
        // e que o número de elementos <td> é maior que 0
        cy.get('td').should('be.visible').should('have.length.greaterThan', 0);
    });
});
