/// <reference types="cypress" />

describe('Login, logout test case', () => {
    it('Login', () => {
        cy.authenticate().then((response => {

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