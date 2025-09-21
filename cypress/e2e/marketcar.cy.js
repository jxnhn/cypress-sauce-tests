import { Selectors } from "../selectors/selectors"

describe('MarketCar', () => {
  beforeEach(() => {
    cy.sauceLogin();

 
  })

  /*Os selectors estão quebrando por conta do fluxo da automação. Deve-se criar um command que reseta o app state antes de cada teste. Os testes não estão isolados.
  Por exemplo, o primeiro teste está flaky porque ao ficarmos rodando a suíte, o botão de add to cart já tinha sido selecionado, e seu data test é alterado. Então o
  Cypress não encontra e quebra. Além disso, alguns seletores da parte de checkout estão tentando acessar a página de checkout, entretanto não estão nem sequer nessa página
  no momento do teste. Isso porque o checkout só tá preenchendo e fazendo o assert, não estamos adicionando o item no carrinho */

  //ERRATA: O TESTE na verdade pegou um bug que existe na página. Não é flaky, realmente o bug existe. A pagina inicial realmente tá carregando com o botão de adicionar item já selecionado.

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

});