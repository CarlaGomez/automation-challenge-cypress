import { signUp } from './signUp.spec'
import { searchByNavigation, searchBySearchBar } from './search.spec'
import { addItemToCart, proceed, completeOrder } from './checkout.spec'
import Checkout from '../pageObjects/checkoutPage'

const checkout = new Checkout()

describe('Buy an item', () =>{

    beforeEach(() => {
        cy.getCookies().then(cookies => {
            const namesOfCookies = cookies.map(c => c.name)
            Cypress.Cookies.preserveOnce(...namesOfCookies)
        })
    })
 
    before(() => {
        cy.visit('/');
    })  

    it('should sing up and log in', () => {
        signUp()
    })

    it('should search for an item using the navigation', () => {
        searchByNavigation()
    })

    it('should search for an item using the search bar', () => {
        searchBySearchBar()
    })

    it('should see the detail of an item, add it to cart', () =>{
       addItemToCart()
    })

    it('should check the summary of the product and take the user to the address tab', () => {
        proceed()
    })

    it('should check the address and take the user to the shipping tab', () => {
        proceed()
    })

    it('should check the shipping and take the user to the payment tab', () => {
        checkout.acceptTerms().check()
        proceed()
    })

    it('should select payment method and complete the purchase', () => {
        completeOrder()
    })
})