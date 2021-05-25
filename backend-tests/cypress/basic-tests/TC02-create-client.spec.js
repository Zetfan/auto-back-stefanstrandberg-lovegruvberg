/// <reference types="cypress" />

describe('Login, create new client, logout', () => {
    it('Create a client', () => {
        cy.authenticate().then((response => {

            // Create a client request
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/client/new',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                },
                body:{
                    "name":"Stefan",
                    "email":"stefan@email.com",
                    "telephone":"123456789"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            })) 

            // Perform a logout
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/logout',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })
})