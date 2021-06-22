/// <reference types="cypress"/> 

import Search from '../../pageObjects/searchPage'

describe('Search using navigation', () => {
    const search = new Search()

    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('should take the user to Evening dresses', () => {
        search.getCategory().eq(0).invoke('show')
        search.getSubcategory().click()
    })

})