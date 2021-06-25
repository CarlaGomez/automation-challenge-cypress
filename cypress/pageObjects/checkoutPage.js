class Checkout {

    addToCart(){
        return cy.get('#add_to_cart > .exclusive');
    }

    succesfulMessage(){
        return cy.get('.layer_cart_product > h2');
    }
    
    closeModal(){
        return cy.get('#layer_cart > .clearfix').find('[title="Close window"]');
    }

    goToCart(){
        return cy.get('[title="View my shopping cart"]');
    }
    
    proceedToCheckout(){
        return cy.get('.cart_navigation > .button > span');
    }

    acceptTerms(){
        return cy.get('input[type=checkbox]');
    }

    paymentMethod(){
        return cy.get('[title="Pay by bank wire"]');
    }

    //Assertions 

    cartQuantity(){
        return cy.get('.cart_quantity');
    }
}

export default Checkout;