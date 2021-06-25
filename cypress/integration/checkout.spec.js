import Checkout from '../pageObjects/checkoutPage'
import CommonSelectors from '../pageObjects/commonSelectorsPage'

const checkout = new Checkout()
const commonSelectors = new CommonSelectors() 

describe('Complete order', () => {

    before(() => {
        cy.login()
    })

    beforeEach(() => {
        cy.getCookies().then(cookies => {
            const namesOfCookies = cookies.map(c => c.name)
            Cypress.Cookies.preserveOnce(...namesOfCookies)
        })
    })

    after(()=> {
        cy.logout()
    })

    it('Adds an item to the cart', () => {
        cy.viewItem()

        cy.waitUntil(() => checkout.addToCart().should('be.visible').click())

        cy.waitUntil(() => checkout.succesfulMessage().should('be.visible')
        .contains('Product successfully added to your shopping cart'))
        
        checkout.closeModal().click()
    }) 

    it('Goes to the cart', ()=>{
    cy.waitUntil(() => checkout.goToCart().should('be.visible').click())
    })

    it('Checks the summary of the product and takes the user to the address tab', () => {
        checkout.cartQuantity().should('have.length.at.least', 1)
        
        checkout.proceedToCheckout().click()
    })

    it('Checks the address and takes the user to the shipping tab', () => {
        commonSelectors.header().should('have.text', 'Addresses')
        
        checkout.proceedToCheckout().click()
    })

    it('Checks the shipping and takes the user to the payment tab', () => {
        commonSelectors.header().should('have.text', 'Shipping')
        
        checkout.acceptTerms().check().should('be.checked')
        
        checkout.proceedToCheckout().click()   
    })

    it('Selects a payment method and completes the purchase', () => {
        commonSelectors.header().should('contain.text', 'Please choose your payment method')
        
        checkout.paymentMethod().click()
        
        commonSelectors.header().should('contain.text', 'Order summary')
        
        checkout.proceedToCheckout().click()
        
        commonSelectors.header().should('contain.text', 'Order confirmation')
    })   
})