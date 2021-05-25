/// <reference types="cypress" />

import * as client from '../helpers/clientHelpers'

describe('Test suite', () => {
    it('create a new client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.performLogout()
        }))
    })

    it('delete a client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })




    //curl 'http://localhost:3000/api/clients' 
    //-H 'Content-Type: application/json;charset=UTF-8' 
    //-H 'X-User-Auth: {"username":"tester01","token":"368997da5ad7a3ea9e404b5086c4104f"}' 

   
    /** 
    it('GET request towards http://localhost:3000/api/clients', () => {
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
        }))
    })


    it('GET request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/api/client/1',
                headers: {
                    "X-User-Auth":JSON.stringify(Cypress.env().loginToken),
                    "Content-Type": "application/json" 
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })


    it('POST request towards /api/client/new', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'GET',
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
        }))
    })


    it('PUT request towards /api/client/1', () => {
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
                    "name":"Mario",
                    "email":"mario@email.com",
                    "telephone":"133756789"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })


    it('DELETE request towards /api/client/1', () => {
        cy.authenticate().then((response => {
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
        }))
    })


    it('POST request towards /api/logout', () => {
        cy.authenticate().then((response => {
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


    // Test case - Create a client
    // 1. Login
    // 2. Create a client
    // 3. Logout

    it.only('Create a client', () => {
        cy.authenticate().then((response => {

            // Create a client request
            cy.request({
                method: 'GET',
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
    })*/


})