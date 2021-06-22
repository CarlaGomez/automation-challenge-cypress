/// <reference types="cypress"/> 

import Search from '../../pageObjects/searchPage'

const search = new Search()

before(() => {
    cy.visit('http://automationpractice.com/index.php')
})

describe('Search using navigation', () => {

    it('should take the user to Evening dresses using the navigation', () => {
        search.getCategory().eq(0).invoke('show');
        search.getSubcategory().click();
    })
})

describe('Search using the search bar and sort results', () =>{
    
    it('should seach for the item that the user enters', () => {
        search.getSearchBar().type('Dress{Enter}');
    })

    it('should sort the results', () => {
        search.getSortDropdown().select('Price: Lowest first');
    })
})