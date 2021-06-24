import Checkout from '../pageObjects/checkoutPage'
import Search from '../pageObjects/searchPage';

const checkout = new Checkout()
const search = new Search()

export function addItemToCart(){

    //View the item detail page and add it to cart
    search.itemList().eq(0).click();
    cy.waitUntil(() => checkout.addToCart().should('be.visible').click());

    cy.waitUntil(() => checkout.succesfulMessage().should('be.visible')
    .contains('Product successfully added to your shopping cart'));

    checkout.closeModal().click();

    cy.waitUntil(() => checkout.goToCart().should('be.visible').click());
}

export function proceed(){
    checkout.proceedToCheckout().click()
}

export function completeOrder(){
    checkout.paymentMethod().click()
    checkout.proceedToCheckout().click()
}