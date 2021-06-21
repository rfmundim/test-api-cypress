/// <reference types = "cypress" />

function getCustomers() {
    return cy.request ({
        method: 'GET',
        url: 'customers',
        failOnStatusCode: false
    })
}

function getCustomer(id) {
    return cy.request ({
        method: 'GET',
        url: `customers/id/${id}`,
        failOnStatusCode: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    })
}

export { getCustomers, getCustomer }