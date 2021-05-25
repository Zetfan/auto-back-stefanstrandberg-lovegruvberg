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
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })

})