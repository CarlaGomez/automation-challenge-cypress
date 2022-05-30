class CommonSelectors {
    
    header(text){
        return cy.get('.page-heading').should('include.text', text);
    }
    
    verifyCheckbox(selector, value){
        if(value==true){
            selector.should('be.checked');
        } else {
            selector.should('not.be.checked'); 
        }
    }
}
export default CommonSelectors;