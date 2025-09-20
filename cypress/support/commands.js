import users from '../fixtures/users.json';
import { Selectors } from "../selectors/selectors"


Cypress.Commands.add('sauceLogin', (username = 'standard_user', password = 'secret_sauce') => {
    cy.visit('/');
    cy.get(Selectors.usernameField).type(username);
    cy.get(Selectors.passwordField).type(password);
    cy.get(Selectors.loginButton).click();
    cy.url().should('include', '/inventory'); // garante que o login foi concluído
  }, {
  });

Cypress.Commands.add('executeCheckout', (userType) => {
    cy.fixture('users').then((users) => {
      const user = users[userType];
      cy.get(Selectors.firstName).type(user.firstName);
      cy.get(Selectors.lastName).type(user.lastName);
      cy.get(Selectors.postalCode).type(user.zipCode);
      cy.get(Selectors.continueButton).click();
      cy.url().should('include', '/checkout-step-two');
      cy.get(Selectors.finishButton).click();
      cy.url().should('include', '/checkout-complete');
      cy.get(Selectors.completeMessage).should('be.visible').and('contain', 'Thank you for your order!');
    });
  });
