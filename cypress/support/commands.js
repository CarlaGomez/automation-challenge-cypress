// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';
import SignUpPage from '../pageObjects/signUpPage'
import Search from '../pageObjects/searchPage';

const signUp = new SignUpPage()
const search = new Search()

Cypress.Commands.add('login', () => { 
    cy.visit('/')
    signUp.signUpButton().should('be.visible').click();
    cy.get('[data-validate=isEmail]').eq(1).type('Judd_Senger91@gmail.com')
    cy.get('[data-validate=isPasswd]').type('Test1234*')
    cy.get('button[type=submit]').contains('Sign in').click()
    signUp.account().should('be.visible');
})

Cypress.Commands.add('searches', () => {
    search.searchBar().type('Dress{Enter}');
})

Cypress.Commands.add('viewItem', () => {
    cy.searches()
    search.itemList().should('be.visible')
        .should('exist')
        .should('have.length', 7)
        .eq(0)
        .click();
})

Cypress.Commands.add('logout', () => { 
    cy.get('.logout').click()
})