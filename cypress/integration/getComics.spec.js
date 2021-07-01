describe('Fecth Spider-Man comics', () =>{

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

    beforeEach(function(){ 
        const name = this.apiData.characterName;
        cy.request(`${API_URL}/characters?name=${name}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            let id = response.body.data.results[0].id
            cy.wrap(id).as('id');
        })
    })
    
    it('Get the Spider-Man comics', function (){
        const characterID = this.id
        cy.request(`${API_URL}/characters/${characterID}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${LIMIT}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response.body.data.results).to.have.length(100)
        })
    })
})