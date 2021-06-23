import * as GETCustomers from '../requests/GET-Customers.request';

const idcliente = 2

describe('GET', () => {
    it('BUSCAR CLIENTE INEXISTENTE', () => {
        GETCustomers.getCustomer(idcliente).should((response) => {
            expect(response.status).to.eq(404)
        })
    })
})
