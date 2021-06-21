import * as GETCustomers from '../requests/GET-Customers.request';
import * as DELETECustomers from '../requests/DELETE-Customers.request';

const idcliente = 1

describe('DELETE', () => {
    it('DELETAR UM CLIENTE', () => {
        GETCustomers.getCustomer(idcliente).should((resCustomer) => {
            if (resCustomer.status === 200) {
                const id = resCustomer.body[0]._id
                DELETECustomers.deleteCustomer(id).should((response) => {
                    expect(response.status).to.eq(204)
                    expect(response.duration).to.lessThan(5000)
                })
            }
        })
    })
})
