import { should } from 'chai'
import SignUpPage from '../../pageObjects/signUpPage'

describe('Create an account', () => {
    const signUp = new SignUpPage()

    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('should go to the sign up page', () => {
        signUp.signUpButton().should('be.visible').click()
    })

    it('should enter email', () => {
        const faker = require("faker");
        let email = faker.internet.email()

        signUp.email().type(email)
        signUp.createAccount().should('be.visible').click()
        cy.wait(3000) 
    })

    it('should fill my personal information', () => {
        signUp.title().click()
        signUp.customerFirstName().type('Carla')
        signUp.customerLastName().type('Gomez')
        signUp.password().type('Test1234*')
        signUp.dayOfBirth().select('15')
        signUp.monthOfBirth().select('November')
        signUp.yearOfBirth().select('1997')
        signUp.newsletter().click()
    })

    it('should fill my address', () => {
        signUp.firstName().clear().type('Carla')
        signUp.lastName().clear().type('Gomez')
        signUp.address().type('8400 NW 25 ST SUITE 100')
        signUp.city().type('Doral')
        signUp.postalCode().type('33198')
        signUp.country().select('United States')
        signUp.state().select('Florida')
        signUp.mobilePhone().type('15042010052')
        signUp.alias().clear().type('Alias')
    })

    it('should register', () => {
        signUp.register().click()
    })
})