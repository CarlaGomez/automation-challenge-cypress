class SignUpPage {
    
    getSignUpButton(){
        return cy.get('.login');
    }

    getEmailInput(){
        return cy.get('#email_create');
    }

    getCreateAccountButton(){
        return cy.get('#SubmitCreate > span');
    }

    //Get all the elements related to the personal information

    getTitleRadioButton(){
        return cy.get('#id_gender1');
    }

    getCustomerFirstNameInput(){
        return cy.get('#account-creation_form > :nth-child(1) > :nth-child(3) > :nth-child(2)');
    }

    getCustomerLastNameInput(){
        return cy.get('#account-creation_form > :nth-child(1) > :nth-child(4) > :nth-child(2)');
    }

    getPasswordInput(){
        return cy.get('#passwd');
    }

    getDayOfBirthDropdown(){
        return cy.get('#days');
    }

    getMonthOfBirthDropdown(){
        return cy.get('#months');
    }

    getYearOfBirthDropdown(){
        return cy.get('#years');
    }
    
    getNewsletter(){
        return cy.get('#newsletter');
    }

    //Get all the elements related to the address

    getFirstNameInput(){
        return cy.get('#account-creation_form > :nth-child(2) > :nth-child(2) > :nth-child(2)');
    }

    getLastNameInput(){
        return cy.get('#account-creation_form > :nth-child(2) > :nth-child(3) > :nth-child(2)');
    }

    getAddressInput(){
        return cy.get('#address1');
    }

    getCityInput(){
        return cy.get('#city');
    }

    getStateDropdown(){
        return cy.get('#id_state');
    }

    getPostalCodeInput(){
        return cy.get('#postcode');
    }

    getCountryDropdown(){
        return cy.get('#id_country');
    }

    getMobilePhoneInput(){
        return cy.get('#phone_mobile');
    }

    getAliasInput(){
        return cy.get('#alias');
    }

    getRegisterButton(){
        return cy.get('#submitAccount > span');
    }   
}

export default SignUpPage