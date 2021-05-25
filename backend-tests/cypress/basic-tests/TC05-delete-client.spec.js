/// <reference types="cypress" />

describe('Login, delete client, logout test case', () => {
    it('Delete client', () => {
        cy.authenticate().then((response => {

            // Delete client 1
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/api/client/1',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                },
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