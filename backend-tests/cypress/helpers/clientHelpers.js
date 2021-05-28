const faker = require('faker')

const CREATE_CLIENT_ENDPOINT = 'http://localhost:3000/api/client/new'

//functions
function createClientPayload() {
    let clientPayload = {
        "name": faker.name.firstName(),
        "email": faker.internet.email(),
        "telephone": faker.phone.phoneNumber()
    }

    return clientPayload
}


function createClientRequest() {
    cy.request({
        method: 'POST',
        url: CREATE_CLIENT_ENDPOINT,
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body: createClientPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({ lastID: response.body.id })
        cy.log(JSON.stringify(response.body))
    }))
}


function getClientRequest() {
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/api/clients',
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        }
    }).then((response => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        cy.log(JSON.stringify(response.body[1]))
    }))
}


function editClientRequest() {
    cy.request({
        method: 'PUT',
        url: 'http://localhost:3000/api/client/1',
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body: {
            "id": 1,
            "name": faker.name.firstName(),
            "email": faker.internet.email(),
            "telephone": faker.phone.phoneNumber()
        }
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}


function deleteClientRequest(idToDelete) {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/client/' + idToDelete,
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}
function createRoomRequest() {
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
            ])
        }
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function deleteRoomRequest() {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/room/1',
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}


function createBillRequest() {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/bill/new',
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
}

function editBillRequest() {
    cy.request({
        method: 'PUT',
        url: 'http://localhost:3000/api/bill/1',
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body: {
            "value": faker.random.number(),
            "paid": false,
        }
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function createReservationRequest() {
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
                'min': 1,
                'max': 3,
            }),
            "room": faker.random.number({
                'min': 1,
                'max': 2,
            }),
            "bill": faker.random.number({
                'min': 1,
                'max': 1,
            }),
        }
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function performLogout() {
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
}





//exports
module.exports = {
    createClientPayload,
    createClientRequest,
    getClientRequest,
    editClientRequest,
    deleteClientRequest,
    createBillRequest,
    editBillRequest,
    createRoomRequest,
    deleteRoomRequest,
    createReservationRequest,
    performLogout
}
