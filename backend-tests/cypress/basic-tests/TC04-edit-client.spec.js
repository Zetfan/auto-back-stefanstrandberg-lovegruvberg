/// <reference types="cypress" />

describe('Login, edit client 1, logout', () => {
    it('Edit client 1', () => {
        cy.authenticate().then((response => {

            cy.request({
                method: 'PUT',
                url: 'http://localhost:3000/api/client/1',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                },
                body:{
                    "id":1,
                    "name":"Arne Hellman",
                    "email":"arne.hellman@example.com",
                    "telephone":"070 000 1111"
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