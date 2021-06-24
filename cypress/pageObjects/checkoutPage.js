class Checkout {

    getAddToCart(){
        return cy.get('#add_to_cart > .exclusive');
    }

    getSuccesfulMessage(){
        return cy.get('.layer_cart_product > h2');
    }
    
    getCloseModal(){
        return cy.get('#layer_cart > .clearfix').find('[title="Close window"]')
    }

    getGoToCart(){
        return cy.get('[title="View my shopping cart"] > b');
    }
    
}

export default Checkout