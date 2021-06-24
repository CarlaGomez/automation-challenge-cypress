/// <reference types="cypress"/> 

import Search from '../../pageObjects/searchPage'

const search = new Search()

before(() => {
    cy.visit('http://automationpractice.com/index.php')
})

describe('Search using navigation', () => {

    it('should take the user to Evening dresses using the navigation', () => {
        search.category().eq(0).invoke('show');
        search.subcategory().click();
    })
})

describe('Search using the search bar and sort results', () =>{
    
    it('should seach for the item that the user enters', () => {
        search.searchBar().type('Dress{Enter}');
    })

    it('should sort the results', () => {
        search.sort().select('Price: Lowest first');
    })

    it('should go to the detail of the item', () =>{
        search.itemList().eq(0).click();
    })
})