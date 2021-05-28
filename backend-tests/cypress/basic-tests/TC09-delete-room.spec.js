/// <reference types="cypress" />

const faker = require('faker')

//WIP

const DELETE_ROOM_ENDPOINT = 'http://localhost:3000/rooms/1'

describe('Test Case: Login, delete room - then - logout', () => {
    it('Delete room', () => {
        cy.authenticate().then((response => {

            // Deleting a room
            cy.request({
                method: 'DELETE',
//                url: 'http://localhost:3000/api/rooms/1',
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