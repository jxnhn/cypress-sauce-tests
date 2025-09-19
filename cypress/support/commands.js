Cypress.Commands.add('sauceLogin', (username = 'standard_user', password = 'secret_sauce') => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory'); // garante que o login foi concluído
  }, {
  });

Cypress.Commands.add('executeCheckout', (userType) => {
    cy.fixture('users').then((users) => {
      const user = users[userType];
      cy.get('[data-test="firstName"]').type(user.firstName);
      cy.get('[data-test="lastName"]').type(user.lastName);
      cy.get('[data-test="postalCode"]').type(user.zipCode);
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two');
      cy.get('[data-test="finish"]').click();
      cy.url().should('include', '/checkout-complete');
      cy.get('[data-test="complete-header"]').should('be.visible').and('contain', 'Thank you for your order!');
    });
  });
