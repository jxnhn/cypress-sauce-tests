describe('Login Tests', () => {
 beforeEach(() => {
    cy.visit('/')
  })

  /*TODO: Selector abstraído para Username, Password, Login Button e Error Message . Add cenário user bloqueado. 
*/

it('login with invalid username but valid password', () => {
    cy.get('[data-test="username"]').type('invalidUser')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

it('login with valid username but invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('invalidPassword')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('login with both invalid username and password', () => {
    cy.get('[data-test="username"]').type('invalidUser1')
    cy.get('[data-test="password"]').type('invalidPassword')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  } )
  
  it('login with empty username and password', () => {
    cy.get('[data-test="username"]').should('be.empty')
    cy.get('[data-test="password"]').should('be.empty')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username is required')
  })

  it('login with empty username and valid password', () => {
    cy.get('[data-test="username"]').should('be.empty')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username is required')
  })

  it('login with valid username and empty password', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').should('be.empty')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Password is required')
  })

  it('login with valid credentials', () => {
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('if user is logged in, then he can log out', () => {
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="username"]').should('be.empty')
    cy.get('[data-test="password"]').should('be.empty')
    cy.get('[data-test="login-button"]').should('be.visible')
} )
})
