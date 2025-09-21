import { Selectors } from "../selectors/selectors"

describe('MarketCar', () => {
  beforeEach(() => {
    cy.sauceLogin();

 
  })

  it('execute checkout informing valid data', () => {
    // Adicionar item ao carrinho e inicia o checkout
    cy.get(Selectors.addBikeToCartButton).click();
    cy.get(Selectors.shoppingCartButton).click();
    cy.get(Selectors.checkoutButton).click();

    cy.executeCheckout('checkoutUserWithValidData');
  })

  it('execute checkout informing invalid data', () => {
    // Adicionar item ao carrinho e inicia o checkout
    cy.get(Selectors.addBikeToCartButton).click();
    cy.get(Selectors.shoppingCartButton).click();
    cy.get(Selectors.checkoutButton).click();

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

    cy.get(Selectors.shoppingCartButton).click();
    cy.get(Selectors.checkoutButton).click();

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

    cy.get(Selectors.shoppingCartButton).click();
    cy.get(Selectors.checkoutButton).click();
    
    cy.executeCheckout('checkoutUserWithValidData');
  })

    it('reorder results by lower to higher price and checkout the first item', () => {

    //Filtra os resultados e pega o primeiro item.
    cy.get(Selectors.filterButton).select('Price (low to high)');
    cy.get('.inventory_item')
    .first()
    .should('contain', 'Sauce Labs Onesie') 
    .within(() => {
      cy.get('button').click();
    });

    cy.get(Selectors.shoppingCartButton).click();
    cy.get(Selectors.checkoutButton).click();

    cy.executeCheckout('checkoutUserWithValidData');
  })

  it('reorder results by higher to lower price and checkout the first item', () => {

    //Filtra os resultados e pega o primeiro item.
    cy.get(Selectors.filterButton).select('Price (high to low)');
    cy.get('.inventory_item')
    .first()
    .should('contain', 'Sauce Labs Fleece Jacket') 
    .within(() => {
      cy.get('button').click();
    });

    cy.get(Selectors.shoppingCartButton).click();
    cy.get(Selectors.checkoutButton).click();

    cy.executeCheckout('checkoutUserWithValidData');
  })

});