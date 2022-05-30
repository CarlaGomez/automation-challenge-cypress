const API_URL = Cypress.env('API_URL');
const TIMESTAMP = Cypress.env('TIMESTAMP');
const PUBLIC_KEY = Cypress.env('PUBLIC_KEY');
const HASH = Cypress.env('HASH');
let limit = 100;

describe('Fecth Marvel characters', () =>{
    it('Get all the Marvel characters', ()=>{ 
        cy.request(`${API_URL}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null;
            expect(response).to.have.property('duration');
            expect(response.body.data).to.have.property('count', 100);
         })
        .its('headers')
        .its('content-type')
        .should('include', 'application/json');
    })

    it('Authentication fails', ()=>{ 
        cy.request({
            method: 'GET',
            url: `${API_URL}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 'MissingParameter');
            expect(response.body).to.have.property('message', 'You must provide a hash.');
        })
    })

    it('Get more than 100 Marvel characters', ()=>{ 
        limit = limit + 1;
        cy.request({
            method: 'GET',
            url: `${API_URL}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You may not request more than 100 items.');
        })
    })

    it('Get less than 1 Marvel character', ()=>{ 
        limit = 0;
        cy.request({
            method: 'GET',
            url: `${API_URL}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}`,
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You must pass an integer limit greater than 0.');
        })
    })
})