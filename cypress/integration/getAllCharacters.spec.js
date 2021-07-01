describe('Fecth Marvel characters', () =>{

    const API_URL = Cypress.env('API_URL');
    const TIMESTAMP = Cypress.env('TIMESTAMP');
    const PUBLIC_KEY = Cypress.env('PUBLIC_KEY');
    const HASH = Cypress.env('HASH');
    const LIMIT = 100;

    it('Get all the Marvel characters', ()=>{ 
        
        cy.request(`${API_URL}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${LIMIT}`)
        .then((response) => {
            expect(response.body).to.have.property('code', 200)
            expect(response.body).not.to.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response.body.data).to.have.property('count', 100)
         })
    })
})