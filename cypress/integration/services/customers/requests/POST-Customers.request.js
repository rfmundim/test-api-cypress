/// <reference types = "cypress" />

function addCustomer(payload) {
    return cy.request ({
        method: 'POST',
        url: 'customers',
        failOnStatusCode: false,
        body: payload
    })
}

export { addCustomer }