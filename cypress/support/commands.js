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

const signUp = new SignUpPage()

Cypress.Commands.add('login', () => { 
    cy.visit('/')
    signUp.signUpButton().should('be.visible').click();
    cy.get('[data-validate=isEmail]').eq(1).type('carlagomezp1@gmail.com')
    cy.get('[data-validate=isPasswd]').type('Carlita01')
    cy.get('button[type=submit]').contains('Sign in').click()
 })