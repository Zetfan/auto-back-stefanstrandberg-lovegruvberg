/// <reference types="cypress" />

const faker = require('faker')

const CREATE_RESERVATION_ENDPOINT = 'http://localhost:3000/api/reservation/new'


describe('Login, create new reservation, logout', () => {
    it('Create reservation', () => {
        cy.authenticate().then((response => {
            // Create a room request
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/reservation/new',
                headers: {
                    "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json"
                },
                body: {
                    "start": faker.date.past(),
                    "end": faker.date.future(),
                    "client": faker.random.number({
                        'min' : 1,
                        'max' : 3,
                    }),
                    "room": faker.random.number({
                        'min' : 1,
                        'max' : 2,
                    }),
                    "bill": faker.random.number({
                        'min' : 1,
                        'max' : 1,
                    }),
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