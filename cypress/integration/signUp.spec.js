import { should } from 'chai'
import SignUpPage from '../pageObjects/signUpPage'

export function signUp(){

    const signUp = new SignUpPage()
    
    signUp.signUpButton().should('be.visible').click();
    
    //Generate random email
    const faker = require("faker");
    let email = faker.internet.email();

    //Fill the information to sign up
    signUp.email().type(email);
    signUp.createAccount().should('be.visible').click();

    signUp.title().check();
    signUp.customerFirstName().type('Carla');
    signUp.customerLastName().type('Gomez');
    signUp.password().type('Test1234*');
    signUp.dayOfBirth().select('15');
    signUp.monthOfBirth().select('November');
    signUp.yearOfBirth().select('1997');
    signUp.newsletter().check();
    signUp.firstName().clear().type('Carla');
    signUp.lastName().clear().type('Gomez');
    signUp.address().type('8400 NW 25 ST SUITE 100');
    signUp.city().type('Doral');
    signUp.postalCode().type('33198');
    signUp.country().select('United States');
    signUp.state().select('Florida');
    signUp.mobilePhone().type('15042010052');
    signUp.alias().clear().type('Alias');
    signUp.register().click();
}