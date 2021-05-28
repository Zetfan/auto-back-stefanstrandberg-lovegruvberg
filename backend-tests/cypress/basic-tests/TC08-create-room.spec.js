/// <reference types="cypress" />

const faker = require('faker')

const CREATE_ROOM_ENDPOINT = 'http://localhost:3000/api/rooms/new'

describe('Login, create new room, logout', () => {
    it('Create room', () => {
        cy.authenticate().then((response => {

            // Create a room request
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/room/new',
                headers: {
                    "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json"
                },
                body: {
                    "category": faker.random.arrayElement([
                        "Double",
                        "Single",
                        "Triple",
                        "Twin",
                        /* I'm practically cheating here... 
                        originally I wanted faker to pick a random feature category, 
                        but I couldn't find the solution for the time being and ended up 
                        listing them as arrays and randomizing their output. */
                    ]),
                    "number": faker.random.number({
                        'min': 1,
                        'max': 399
                    }),
                    "floor": faker.random.number({
                        'min': 1,
                        'max': 10
                    }),
                    "available": faker.random.boolean(),
                    "price": faker.random.number({
                        'min': 500,
                        'max': 5000
                    }),
                    "features": faker.random.arrayElement([
                        "Balcony",
                        "Ensuite",
                        "Sea View",
                        "Penthouse",
                        //".:kebabCase:."
                    ])
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