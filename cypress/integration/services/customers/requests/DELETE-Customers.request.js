/// <reference types = "cypress" />

function deleteCustomer(id) {
    return cy.request ({
        method: 'DELETE',
        url: `customers/${id}`,
        failOnStatusCode: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    })
}

export { deleteCustomer }