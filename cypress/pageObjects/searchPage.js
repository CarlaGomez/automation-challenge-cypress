class Search {

    getCategory(){
        return cy.get('ul.submenu-container.clearfix.first-in-line-xs');
    }

    getSubcategory(){
        return cy.get('.sf-menu li li li a').contains('Evening');
    }

}

export default Search