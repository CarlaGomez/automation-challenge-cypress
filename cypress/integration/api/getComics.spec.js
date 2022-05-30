describe('Fecth Spider-Man comics', () =>{

    const API_URL = Cypress.env('API_URL');
    const TIMESTAMP = Cypress.env('TIMESTAMP');
    const PUBLIC_KEY = Cypress.env('PUBLIC_KEY');
    const HASH = Cypress.env('HASH');
    let limit = 100;

    before(function(){
        //Call data from fixtures
        cy.fixture('apiData').then(function (apiData) {
            this.apiData = apiData;
        })
    })

    before(function getCharacterId(){ 
        const name = this.apiData.characterName;
        cy.request(`${API_URL}/characters?nameStartsWith=${name}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then((response) => {
            expect(response.body).not.to.be.null;
            let id = response.body.data.results[10].id;
            cy.wrap(id).as('id');
        })
    })
    
    it('Get the Spider-Man comics', function (){
        const characterID = this.id;
        cy.request(`${API_URL}/characters/${characterID}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null;
            expect(response).to.have.property('duration');
            expect(response.body.data.results).to.have.length(100);
        })
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');
    })

    it('Authentication fails', function(){ 
        const characterID = this.id;
        cy.request({
            method: 'GET',
            url: `${API_URL}/characters/${characterID}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 'MissingParameter');
            expect(response.body).to.have.property('message', 'You must provide a hash.');
        })
    })

    it('Get more than 100 Spider-Man comics', function(){ 
        const characterID = this.id;
        limit = limit + 1;
        cy.request({
            method: 'GET',
            url: `${API_URL}/characters/${characterID}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You may not request more than 100 items.');
        })
    })

    it('Get less than 1 Spider-Man Comic', function(){ 
        const characterID = this.id;
        limit = 0;
        cy.request({
            method: 'GET',
            url: `${API_URL}/characters/${characterID}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You must pass an integer limit greater than 0.');
        })
    })
})