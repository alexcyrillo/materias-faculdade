describe('Visualizar Venda', () => {
    it('Deve exibir as compras feitas pelo cliente buscado', () => {
        // Visite a página de vendas no seu sistema
        cy.visit('http://localhost:5173/vendas');
        // Clique no penúltimo botão
        cy.get('button.style-Botao').eq(-2).click();
        // Aguarde a visibilidade do modal
        cy.get('div.modal-content').should('be.visible');
        // Preencha o campo do CPF e aguarde
        cy.get('input#cpfCliente.form-control').type('95910195951', { delay: 2 });
        // Clique no botão de busca
        cy.get('button.btn.btn-primary').click();
        // Aguarde a mudança de URL ou a conclusão da solicitação AJAX
        cy.url().should('include', `/historico/95910195951`);
        // Aguarde a visibilidade de pelo menos um elemento <td> na tabela de histórico
        cy.get('td').should('be.visible').should('have.length.greaterThan', 0);
        // Certifique-se de que o modal seja fechado (ajuste o seletor conforme necessário)
        cy.get('div.modal-content').should('not.exist');
    });
});
