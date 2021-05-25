/// <reference types="cypress" />

describe('Login, create new bill, logout', () => {
    it('Create a bill', () => {
        cy.authenticate().then((response => {

            // Create a bill request
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/bill/new',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                },
                body:{
                    "value":"5000",
                    "paid":true,
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