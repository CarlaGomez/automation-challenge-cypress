/// <reference types="cypress"/> 

import Checkout from '../../pageObjects/checkoutPage'
const checkout = new Checkout()

describe('Search using the search bar and sort results', () =>{

    before(() => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('Dress{Enter}');
        cy.get('.product-container > ').eq(0).click();     
    })   
    
    it('should add item to cart', () =>{
        cy.waitUntil(() => checkout.addToCart().should('be.visible').click());

        checkout.succesfulMessage().should('be.visible')
        .contains('Product successfully added to your shopping cart');

        checkout.closeModal().click();

        cy.waitUntil(() => checkout.goToCart().should('be.visible').click());
    })

    
})