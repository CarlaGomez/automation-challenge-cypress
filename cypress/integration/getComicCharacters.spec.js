describe('Fecth X-Man Characters', () =>{

    const API_URL = Cypress.env('API_URL');
    const TIMESTAMP = Cypress.env('TIMESTAMP');
    const PUBLIC_KEY = Cypress.env('PUBLIC_KEY');
    const HASH = Cypress.env('HASH');
    const LIMIT = 100;
    

    before(function(){
        cy.fixture('apiData').then(function (apiData) {
            this.apiData = apiData
        })
    })

    beforeEach(function (){ 
        const name = this.apiData.comicName;
        cy.request(`${API_URL}/comics?title=${name}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${LIMIT}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            let id = response.body.data.results[57].id
            cy.wrap(id).as('id');
        })
    })
    
    it('Get the Characters of X-Man comics', function (){
        const comicID = this.id
        cy.request(`${API_URL}/comics/${comicID}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })
})