import Search from '../pageObjects/searchPage'

const search = new Search()

describe('Search', () => {

    beforeEach(() => {
        cy.login()
    })

    after(()=> {
        cy.logout()
    })

    it('Searches for evening dresses using the navigation', () => {
        search.category().eq(0).invoke('show').should('be.visible')

        search.subcategory().should('have.text', 'Evening Dresses').click()

        search.visitedCategory()
        .should('be.visible')
        .should('contain.text', 'Evening Dresses')
    })

    it('Searches for an item', () => {
        cy.searches()
    })  

    it('Sorts by lowest price first', () => {
        cy.searches()

        search.sort().select('Price: Lowest first')
    }) 

    it('Goes to the detail of an item', () => {
        cy.viewItem()
    }) 
})