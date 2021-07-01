import SignUp from '../pageObjects/signUpPage'
import CommonSelectors from '../pageObjects/commonSelectorsPage'

const signUp = new SignUp()
const commonSelectors = new CommonSelectors()
  
before(function (){
    cy.visit('/');
    signUp.signUpButton().should('be.visible').click();
    commonSelectors.header().should('have.text', 'Authentication');
    cy.fixture('signUpData').then(function (signUpData) {
        this.signUpData = signUpData
    })
})

after(()=> {
    cy.logout()
})

describe('Sign up', function () {
    
    it('Enters the email', function () {
        //Generate random email
        const faker = require("faker")

        let email = faker.internet.email()

        //Fill the information to sign up
        signUp.email().type(email)

        cy.waitUntil(()=>signUp.createAccount().should('be.visible').click())

        cy.waitUntil(()=>commonSelectors.header().should('have.text', 'Create an account'))
    })

    it('Fills my personal information', function () {
        cy.waitUntil(()=>signUp.title().check().should('be.checked'))

        signUp.customerFirstName().type(this.signUpData.firstName)

        signUp.customerLastName().type(this.signUpData.lastName)

        signUp.password().type(this.signUpData.password)

        signUp.dayOfBirth().select(this.signUpData.dayOfBirth)

        signUp.monthOfBirth().select(this.signUpData.monthOfBirth)

        signUp.yearOfBirth().select(this.signUpData.yearOfBirth)

        signUp.newsletter().check()

        signUp.firstName().clear().type(this.signUpData.firstName)

        signUp.lastName().clear().type(this.signUpData.lastName)

        signUp.address().type(this.signUpData.address)

        signUp.city().type(this.signUpData.city)

        signUp.postalCode().type(this.signUpData.postalCode)

        signUp.country().select(this.signUpData.country)

        signUp.state().select(this.signUpData.state)

        signUp.mobilePhone().type(this.signUpData.mobilePhone)

        signUp.alias().clear().type(this.signUpData.alias)

        signUp.register().click()
        
        signUp.account().should('be.visible')
    })
})