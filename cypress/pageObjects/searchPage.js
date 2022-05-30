class Search {
    
    category(){
        return cy.get('ul.submenu-container.clearfix.first-in-line-xs').eq(0);
    }

    subcategory(text){
        return cy.get('.sf-menu li li li a').contains(text);
    }

    searchBar(){
        return cy.get('#search_query_top');
    }

    sort(){
        return cy.get('#selectProductSort');
    }

    itemList(){
        return cy.get('#center_column').find('.product-name').should('be.visible').and('exist');
    }

    //Assertions

    visitedCategory(){
        return cy.get('.cat-name')
        .should('be.visible')
        .should('contain.text', 'Evening Dresses');
    }
}
export default Search;