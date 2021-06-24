class Checkout {

    addToCart(){
        return cy.get('#add_to_cart > .exclusive');
    }

    succesfulMessage(){
        return cy.get('.layer_cart_product > h2');
    }
    
    closeModal(){
        return cy.get('#layer_cart > .clearfix').find('[title="Close window"]')
    }

    goToCart(){
        return cy.get('[title="View my shopping cart"]');
    }
    
}

export default Checkout