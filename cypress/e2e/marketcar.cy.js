import { Selectors } from "../selectors/selectors"

describe('MarketCar', () => {
  beforeEach(() => {
    cy.sauceLogin();
    
 
  })

  it('execute checkout informing valid data', () => {
    // Adicionar item ao carrinho
    cy.get(Selectors.addBikeToCartButton).click();
    cy.get(Selectors.shoppingCartButton).click();

    cy.executeCheckout('checkoutUserWithValidData');
  })

  it('execute checkout informing invalid data', () => {
    // Adicionar item ao carrinho
    cy.get(Selectors.addBikeToCartButton).click();
    cy.get(Selectors.shoppingCartButton).click();

    cy.executeCheckout('checkoutUserWithInvalidData');
  })

  it('reorder results by name from Z to A and checkout the first item', () => {

    //Filtra os resultados e pega o primeiro item.
    cy.get(Selectors.filterButton).select('Name (Z to A)');
    cy.get('.inventory_item')
    .first()
    .should('contain', 'Test.allTheThings() T-Shirt (Red)') 
    .within(() => {
      cy.get('button').click();
    });

    cy.executeCheckout('checkoutUserWithValidData');
  })

  it('reorder results by name from A to Z and checkout the first item', () => {

    //Filtra os resultados e pega o primeiro item.
    cy.get(Selectors.filterButton).select('Name (A to Z)');
    cy.get('.inventory_item')
      .first()
      .should('contain', 'Sauce Labs Backpack')
      .within(() => {
        cy.get('button').click();
      });

    cy.executeCheckout('checkoutUserWithValidData');
  })

});