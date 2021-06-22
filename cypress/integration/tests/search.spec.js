/// <reference types="cypress"/> 

import Search from '../../pageObjects/searchPage'

const search = new Search()

beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
})

describe('Search using navigation', () => {

    it('should take the user to Evening dresses using the navigation', () => {
        search.getCategory().eq(0).invoke('show')
        search.getSubcategory().click()
    })
})

describe('Search using the search bar', () =>{
    
    it('should seach for the item that the user enters', () => {
        search.getSearchBar().type('Blouse{Enter}')
    })
})