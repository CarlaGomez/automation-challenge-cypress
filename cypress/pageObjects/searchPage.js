class Search {

    category(){
        return cy.get('ul.submenu-container.clearfix.first-in-line-xs');
    }

    subcategory(){
        return cy.get('.sf-menu li li li a').contains('Evening');
    }

    searchBar(){
        return cy.get('#search_query_top');
    }

    sort(){
        return cy.get('#selectProductSort');
    }

    itemList(){
        return cy.get('.product-container > ');
    }
}

export default Search