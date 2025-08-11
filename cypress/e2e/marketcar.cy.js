describe('MarketCar', () => {
  beforeEach(() => {
    cy.sauceLogin();
  })

  it('completes checkout successfully when an item is added to the cart', () => {
    // Adicionar item ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    //Iniciar checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one');
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Wick');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two');

    //Confirmação da compra
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete');
    cy.get('[data-test="complete-header"]').should('be.visible').and('contain', 'Thank you for your order!');
  })


});