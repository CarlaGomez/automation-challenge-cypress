import SignUp from '../../pageObjects/signUpPage'
import CommonSelectors from '../../pageObjects/commonSelectorsPage'

const signUp = new SignUp()
const commonSelectors = new CommonSelectors()
  
before(function (){
    cy.visit('/');
    signUp.signUpButton();
    commonSelectors.header('Authentication');
    //Call data from fixtures
    cy.fixture('signUpData').then(function (signUpData) {
        this.signUpData = signUpData;
    })
})

after(()=> {
    cy.logout();
})

describe('Sign up', function () {
    
    const faker = require("faker");

    it('Enters the email', function () {
        //Generate random email
        let email = faker.internet.email();
        signUp.email().eq(0).type(email);
        cy.waitUntil(()=>signUp.createAccount().click());
        cy.waitUntil(()=>commonSelectors.header('Create an account'));
    })

    it('Fills my personal information', function () {
        let customerFirstName = faker.name.firstName();
        let customerLastName = faker.name.lastName();
        let password = faker.internet.password();
        let address = faker.address.streetAddress(true);
        let city = faker.address.cityName();
        
        cy.waitUntil(()=>signUp.title().check());
        commonSelectors.verifyCheckbox(signUp.title(), true)
        signUp.customerFirstName().type(customerFirstName);
        signUp.customerLastName().type(customerLastName);
        signUp.password().type(password);
        signUp.dayOfBirth().select(this.signUpData.dayOfBirth);
        signUp.monthOfBirth().select(this.signUpData.monthOfBirth);
        signUp.yearOfBirth().select(this.signUpData.yearOfBirth);
        signUp.newsletter().check();
        signUp.firstName().clear().type(customerFirstName);
        signUp.lastName().clear().type(customerLastName);
        signUp.address().type(address);
        signUp.city().type(city);
        signUp.postalCode().type(this.signUpData.postalCode);
        signUp.country().select(this.signUpData.country);
        signUp.state().select(this.signUpData.state);
        signUp.mobilePhone().type(this.signUpData.mobilePhone);
        signUp.alias().clear().type(customerFirstName);
        signUp.register().click();
        signUp.verifyAccount().should('have.text', customerFirstName + ' ' + customerLastName);
    })
})