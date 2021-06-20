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
        return cy.get('#customer_firstname');
    }

    getCustomerLastNameInput(){
        return cy.get('#customer_lastname');
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
        return cy.get('#firstname');
    }

    getLastNameInput(){
        return cy.get('#lastname');
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