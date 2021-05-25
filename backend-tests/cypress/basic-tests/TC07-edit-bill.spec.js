/// <reference types="cypress" />

const faker = require('faker')

describe('Login, edit bill, logout', () => {
    it('Edit bill', () => {
        cy.authenticate().then((response => {

            // Edit bill request
            cy.request({
                method: 'PUT',
                url: 'http://localhost:3000/api/bill/1/',
                headers: {
                    "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json"
                },
                body: {
                    "value": faker.random.number(),
                    "paid": true,
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // Perform a logout
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/logout',
                headers: {
                    "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json"
                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })
})