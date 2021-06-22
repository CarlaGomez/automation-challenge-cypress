class Search {

    getCategory(){
        return cy.get('ul.submenu-container.clearfix.first-in-line-xs');
    }

    getSubcategory(){
        return cy.get('.sf-menu li li li a').contains('Evening');
    }

    getSearchBar(){
        return cy.get('#search_query_top');
    }

    getSortDropdown(){
        return cy.get('#selectProductSort');
    }

    getItemList(){
        return cy.get('.product-container > ');
    }
}

export default Search