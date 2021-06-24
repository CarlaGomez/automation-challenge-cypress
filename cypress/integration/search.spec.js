import Search from '../pageObjects/searchPage'
import Checkout from '../pageObjects/checkoutPage'

const search = new Search()
const checkout = new Checkout()

describe('Search', () => {

    beforeEach(() => {
        cy.login();
    })
    
    it('Searches using the navigation', () => {
        search.category().eq(0).invoke('show');
        search.subcategory().click();
    })

    it('Searches for an item and adds it to the cart', () => {
        search.searchBar().type('Dress{Enter}');
        search.sort().select('Price: Lowest first');
        search.itemList().eq(0).click();
        cy.waitUntil(() => checkout.addToCart().should('be.visible').click());
        cy.waitUntil(() => checkout.succesfulMessage().should('be.visible')
        .contains('Product successfully added to your shopping cart'));
        checkout.closeModal().click();
    })  
})