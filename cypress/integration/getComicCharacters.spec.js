describe('Fecth X-Man Characters', () =>{

    const API_URL = Cypress.env('API_URL');
    const TIMESTAMP = Cypress.env('TIMESTAMP');
    const PUBLIC_KEY = Cypress.env('PUBLIC_KEY');
    const HASH = Cypress.env('HASH');
    let limit = 100;

    before(function(){
        //Call data from fixtures
        cy.fixture('apiData').then(function (apiData) {
            this.apiData = apiData
        })
    })

    before(function getComicId(){ 
        const name = this.apiData.comicName;

        cy.request(`${API_URL}/comics?title=${name}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`)
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
            expect(response).to.have.property('duration')
            expect(response.body.data.results).to.have.length(10)
        })
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })

    it('Authentication fails', function(){ 
        const comicID = this.id

        cy.request({
            method: 'GET',
            url: `${API_URL}/comics/${comicID}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 'MissingParameter')
            expect(response.body).to.have.property('message', 'You must provide a hash.')
        })
    })

    it('Validate there are less than 11 X-Man characters', function(){ 
        const comicID = this.id

        cy.request(`${API_URL}/comics/${comicID}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            expect(response).to.have.property('duration')
            expect(response.body.data.results).to.have.length.lessThan(11)
        })
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })

    it('Get more than 100 X-Man characters', function(){ 
        const comicID = this.id;

        limit = limit + 1;

        cy.request({
            method: 'GET',
            url: `${API_URL}/comics/${comicID}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 409)
            expect(response.body).to.have.property('status', 'You may not request more than 100 items.')
        })
    })

    it('Get less than 1 X-Man character', function(){ 
        const comicID = this.id;

        limit = 0;
        
        cy.request({
            method: 'GET',
            url: `${API_URL}/comics/${comicID}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 409)
            expect(response.body).to.have.property('status', 'You must pass an integer limit greater than 0.')
        })
    })
})