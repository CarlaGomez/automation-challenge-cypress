import Search from '../../pageObjects/searchPage'

const search = new Search()

describe('Search', () => {

    beforeEach(() => {
        cy.login();
    })

    after(()=> {
        cy.logout();
    })

    it('Searches for evening dresses using the navigation', () => {
        search.category().invoke('show').should('be.visible');
        search.subcategory('Evening').click();
        search.visitedCategory();
    })

    it('Searches for an item', () => {
        cy.searches('Dress{Enter}');
    })  

    it('Sorts by lowest price first', () => {
        cy.searches('Dress{Enter}');
        search.sort().select('Price: Lowest first');
    }) 

    it('Goes to the detail of an item', () => {
        cy.viewItem();
    }) 
})