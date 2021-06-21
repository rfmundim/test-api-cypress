/// <reference types = "cypress" />

function changeCustomer(id, payload) {
    return cy.request ({
        method: 'PUT',
        url: `customers/${id}`,
        failOnStatusCode: false,
        body: payload
    })
}
 
export { changeCustomer }