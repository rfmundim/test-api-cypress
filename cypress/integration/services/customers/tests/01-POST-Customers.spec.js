import * as POSTCustomers from '../requests/POST-Customers.request';

const payload = require('../payloads/ADD-Customer.json')

describe('POST', () => {
    it('CADASTRAR UM CLIENTE', () => {
        POSTCustomers.addCustomer(payload).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.headers).property('content-type').to.eq('application/json; charset=utf-8')
            expect(response.duration).to.lessThan(5000)
            expect(response.body.name).to.eq('Roberval Alcantara')
        })
    })
})