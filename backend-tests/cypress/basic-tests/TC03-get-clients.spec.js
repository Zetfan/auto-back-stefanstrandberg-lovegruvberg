/// <reference types="cypress" />

describe('Login, get clients, logout test case', () => {
    it('Get clients', () => {
        cy.authenticate().then((response => {


            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/api/clients',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                }
            })
        })).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
            cy.log(JSON.stringify(response.body[1]))


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