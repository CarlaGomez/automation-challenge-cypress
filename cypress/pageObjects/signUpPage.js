class SignUpPage {
    
    signUpButton(){
        return cy.get('.login');
    }

    email(){
        return cy.get('#email_create');
    }

    createAccount(){
        return cy.get('#SubmitCreate > span');
    }

    //Get all the elements related to the personal information

    title(){
        return cy.get('#id_gender1');
    }

    customerFirstName(){
        return cy.get('#customer_firstname');
    }

    customerLastName(){
        return cy.get('#customer_lastname');
    }

    password(){
        return cy.get('#passwd');
    }

    dayOfBirth(){
        return cy.get('#days');
    }

    monthOfBirth(){
        return cy.get('#months');
    }

    yearOfBirth(){
        return cy.get('#years');
    }
    
    newsletter(){
        return cy.get('#newsletter');
    }

    //Get all the elements related to the address

    firstName(){
        return cy.get('#firstname')
    }

    lastName(){
        return cy.get('#lastname');
    }

    address(){
        return cy.get('#address1');
    }

    city(){
        return cy.get('#city');
    }

    state(){
        return cy.get('#id_state');
    }

    postalCode(){
        return cy.get('#postcode');
    }

    country(){
        return cy.get('#id_country');
    }

    mobilePhone(){
        return cy.get('#phone_mobile');
    }

    alias(){
        return cy.get('#alias');
    }

    register(){
        return cy.get('#submitAccount > span');
    }   
}

export default SignUpPage