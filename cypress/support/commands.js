Cypress.Commands.add('sauceLogin', (username = 'standard_user', password = 'secret_sauce') => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory'); // garante que o login foi concluído
  }, {
  });

