describe('Visualizar Venda', () => {
    it('Deve exibir erro ao buscar um cpf de um cliente inexistente', () => {
        cy.visit('http://localhost:5173/vendas');
        // Clique no penúltimo botão
        cy.get('button.style-Botao').eq(-2).click();
        // Aguarde a visibilidade do modal
        cy.get('div.modal-content').should('be.visible');
        // Preencha o campo do CPF e aguarde
        cy.get('input#cpfCliente.form-control').type('1');
        // Clique no botão de busca
        cy.get('button.btn.btn-primary').click();
        // Certifique-se de que a mensagem de erro apareceu na tela
        cy.get('div.alert.alert-danger').should('be.visible');
    });
});
