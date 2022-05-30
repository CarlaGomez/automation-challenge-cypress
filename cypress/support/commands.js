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
const USER_NAME = Cypress.env('USER_NAME');
const PASSWORD = Cypress.env('PASSWORD');

Cypress.Commands.add('login', () => { 
    cy.visit('/')
    signUp.signUpButton();
    signUp.email().eq(1).type(USER_NAME);
    signUp.password().type(PASSWORD);
    cy.get('button[type=submit]').contains('Sign in').click();
    signUp.verifyAccount().should('have.text', 'Carla Gomez');
})

Cypress.Commands.add('searches', (item) => {
    search.searchBar().type(item);
})

Cypress.Commands.add('viewItem', () => {
    cy.searches('Dress{Enter}')
    search.itemList()
        .should('have.length', 7)
        .eq(0)
        .click();
})

Cypress.Commands.add('logout', () => { 
    cy.get('.logout').click();
})