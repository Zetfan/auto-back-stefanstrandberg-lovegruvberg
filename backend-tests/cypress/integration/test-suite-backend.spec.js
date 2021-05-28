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

    it('TC07 edit bill request', () => {
        cy.authenticate().then((response => {
            client.editBillRequest()
            client.performLogout()
        }))
    })

    it('TC08 create room request', () => {
        cy.authenticate().then((response => {
            client.createRoomRequest()
            client.performLogout()
        }))
    })

    it('TC09 delete room request', () => {
        cy.authenticate().then((response => {
            client.deleteRoomRequest()
            client.performLogout()
        }))
    })

    it('TC10 create reservation request', () => {
        cy.authenticate().then((response => {
            client.createReservationRequest()
            client.performLogout()
        }))
    })
})