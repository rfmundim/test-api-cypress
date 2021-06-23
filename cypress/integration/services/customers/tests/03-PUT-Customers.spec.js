import * as GETCustomers from '../requests/GET-Customers.request';
import * as PUTCustomers from '../requests/PUT-Customers.request';

const idcliente = 1

const payload = require('../payloads/CHANGE-Customer.json')

describe('PUT', () => {
    it('ATUALIZAR UM CLIENTE', () => {
        GETCustomers.getCustomer(idcliente).should((resCustomer) => {
            if (resCustomer.status === 200) {
                const id = resCustomer.body[0]._id
                PUTCustomers.changeCustomer(id, payload).should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.be.not.null
                    expect(response.duration).to.lessThan(5000)
                    expect(response.body.status).to.eq('CANCELADO')
                })
            }
        })
    })
})