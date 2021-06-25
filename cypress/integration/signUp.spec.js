import SignUp from '../pageObjects/signUpPage'
import CommonSelectors from '../pageObjects/commonSelectorsPage'

const signUp = new SignUp()
const commonSelectors = new CommonSelectors()
  
before(() =>{
    cy.visit('/');
    signUp.signUpButton().should('be.visible').click();
    commonSelectors.header().should('have.text', 'Authentication');
})

after(()=> {
    cy.logout()
})

describe('Sign up', () => {
    
    it('Enters the email', () => {
        //Generate random email
        const faker = require("faker")

        let email = faker.internet.email()

        //Fill the information to sign up
        signUp.email().type(email)

        cy.waitUntil(()=>signUp.createAccount().should('be.visible').click())

        cy.waitUntil(()=>commonSelectors.header().should('have.text', 'Create an account'))
    })

    it('Fills my personal information', () => {
        cy.waitUntil(()=>signUp.title().check().should('be.checked'))

        signUp.customerFirstName().type('Carla')

        signUp.customerLastName().type('Gomez')

        signUp.password().type('Test1234*')

        signUp.dayOfBirth().select('15')

        signUp.monthOfBirth().select('November')

        signUp.yearOfBirth().select('1997')

        signUp.newsletter().check()

        signUp.firstName().clear().type('Carla')

        signUp.lastName().clear().type('Gomez')

        signUp.address().type('8400 NW 25 ST SUITE 100')

        signUp.city().type('Doral')

        signUp.postalCode().type('33198')

        signUp.country().select('United States')

        signUp.state().select('Florida')

        signUp.mobilePhone().type('15042010052')

        signUp.alias().clear().type('Alias')

        signUp.register().click()
        
        signUp.account().should('be.visible')
    })
})