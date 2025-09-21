import { Selectors } from "../selectors/selectors"

describe('Login Tests', () => {
 beforeEach(() => {
    cy.visit('/')
  })

it('login with invalid username but valid password', () => {
    cy.get(Selectors.usernameField).type('invalidUser')
    cy.get(Selectors.passwordField).type('secret_sauce')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

it('login with valid username but invalid password', () => {
    cy.get(Selectors.usernameField).type('standard_user')
    cy.get(Selectors.passwordField).type('invalidPassword')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('login with both invalid username and password', () => {
    cy.get(Selectors.usernameField).type('invalidUser1')
    cy.get(Selectors.passwordField).type('invalidPassword')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  } )
  
  it('login with empty username and password', () => {
    cy.get(Selectors.usernameField).should('be.empty')
    cy.get(Selectors.passwordField).should('be.empty')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Epic sadface: Username is required')
  })

  it('login with empty username and valid password', () => {
    cy.get(Selectors.usernameField).should('be.empty')
    cy.get(Selectors.passwordField).type('secret_sauce')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Epic sadface: Username is required')
  })

  it('login with valid username and empty password', () => {
    cy.get(Selectors.usernameField).type('standard_user')
    cy.get(Selectors.passwordField).should('be.empty')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Password is required')
  })

  it('login with valid credentials', () => {
    cy.get(Selectors.usernameField).type('performance_glitch_user')
    cy.get(Selectors.passwordField).type('secret_sauce')
    cy.get(Selectors.loginButton).click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('if it is a blocked user, then he cannot log in', () => {
    cy.get(Selectors.usernameField).type('locked_out_user')
    cy.get(Selectors.passwordField).type('secret_sauce')
    cy.get(Selectors.loginButton).click()
    cy.get(Selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'this user has been locked out.')
  })

  it('if user is logged in, then he can log out', () => {
    cy.get(Selectors.usernameField).type('performance_glitch_user')
    cy.get(Selectors.passwordField).type('secret_sauce')
    cy.get(Selectors.loginButton).click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
    cy.get(Selectors.menuButton).click()
    cy.get(Selectors.logoutButton).click()
    cy.get('.login_logo').should('be.visible')
    cy.get(Selectors.usernameField).should('be.empty')
    cy.get(Selectors.passwordField).should('be.empty')
    cy.get(Selectors.loginButton).should('be.visible')
} )
})
