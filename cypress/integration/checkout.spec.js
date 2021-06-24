import Checkout from '../pageObjects/checkoutPage'

const checkout = new Checkout()

decribes('Complete order', () => {

    beforeEach(() => {
        cy.login();
    })

    it('Goes to the cart', ()=>{
    cy.waitUntil(() => checkout.goToCart().should('be.visible').click());
    })

    it('Checks the summary of the product and takes the user to the address tab', () => {
        checkout.proceedToCheckout().click()
    })

    it('Checks the address and takes the user to the shipping tab', () => {
        checkout.proceedToCheckout().click()
    })

    it('Checks the shipping and takes the user to the payment tab', () => {
        checkout.acceptTerms().check()
        checkout.proceedToCheckout().click()
    })

    it('Selects a payment method and completes the purchase', () => {
        checkout.paymentMethod().click()
        checkout.proceedToCheckout().click()
    })   
})