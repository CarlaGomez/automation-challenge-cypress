import Checkout from '../../pageObjects/checkoutPage'
import CommonSelectors from '../../pageObjects/commonSelectorsPage'

const checkout = new Checkout()
const commonSelectors = new CommonSelectors() 

describe('Complete order', () => {

    before(() => {
        cy.login();
    })

    beforeEach(() => {
        // preserve cookies
        cy.getCookies().then(cookies => {
            const namesOfCookies = cookies.map(c => c.name);
            Cypress.Cookies.preserveOnce(...namesOfCookies);
        })
    })

    after(()=> {
        cy.logout();
    })

    it('Adds an item to the cart', () => {
        cy.viewItem();
        cy.waitUntil(() => checkout.addToCart().click());
        cy.waitUntil(() => checkout.succesfulMessage()
        .contains('Product successfully added to your shopping cart'));
        checkout.closeModal().click();
    }) 

    it('Goes to the cart', ()=>{
    cy.waitUntil(() => checkout.goToCart().click());
    })

    it('Checks the summary of the product and takes the user to the address tab', () => {
        checkout.cartQuantity().should('have.length.at.least', 1);
        checkout.proceedToCheckout().click();
    })

    it('Checks the address and takes the user to the shipping tab', () => {
        commonSelectors.header('Addresses');
        checkout.proceedToCheckout().click();
    })

    it('Checks the shipping and takes the user to the payment tab', () => {
        commonSelectors.header('Shipping');
        checkout.acceptTerms().check();
        commonSelectors.verifyCheckbox(checkout.acceptTerms(), true)
        checkout.proceedToCheckout().click();
    })

    it('Selects a payment method and completes the purchase', () => {
        commonSelectors.header('Please choose your payment method');
        checkout.paymentMethod().click();
        commonSelectors.header('Order summary');
        checkout.proceedToCheckout().click();
        commonSelectors.header('Order confirmation');
    })   
})