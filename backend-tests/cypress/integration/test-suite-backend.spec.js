/// <reference types="cypress" />

import * as client from '../helpers/clientHelpers'

describe('Test suite', () => {

    it('TC01 login, logout', () => {
        cy.authenticate().then((response => {
            client.performLogout()
        }))
    })

    
    it('TC02 create a new client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.performLogout()
        }))
    })


    it('TC03 GET clients', () => {
        cy.authenticate().then((response => {
            client.getClientRequest()
            client.performLogout()
        }))
    })


    it('TC04 edit client 1', () => {
        cy.authenticate().then((response => {
            client.editClientRequest()
            client.performLogout()
        }))
    })


    it('TC05 delete a client', () => {
        cy.authenticate().then((response => {
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })


    it('TC06 create a new bill', () => {
        cy.authenticate().then((response => {
            client.createBillRequest()
            client.performLogout()
        }))
    })

})