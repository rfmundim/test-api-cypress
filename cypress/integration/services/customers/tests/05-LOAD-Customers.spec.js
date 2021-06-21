import * as GETCustomers from '../requests/GET-Customers.request';
import * as DELETECustomers from '../requests/DELETE-Customers.request';
import * as PUTCustomers from '../requests/PUT-Customers.request';
import * as POSTCustomers from '../requests/POST-Customers.request';


const load = require('../payloads/LOAD-Customer.json')

const qtd = Object.keys(load.customers).length

describe('LOAD', () => {
  it('DELETAR TODOS', () => {
    GETCustomers.getCustomers().should((response) => {
      if (response.status === 200) {
        response.body.forEach((customer) => {
          DELETECustomers.deleteCustomer(customer._id).should((response) => {
            expect(response.status).to.eq(204)
            expect(response.duration).to.lessThan(5000)
          })
        })
      }
    })
  })

  for (let i = 0; i < qtd; i = i + 1) {
    it(`TESTE DE CARGA ID: ${load.customers[i].id}`, () => {
      POSTCustomers.addCustomer(load.customers[i]).should((response) => {
        expect(response.status, 'Validacao status').to.eq(201)
        expect(response.duration, 'Validacao timeout').to.lessThan(5000)
        expect(response.body.name).to.eq(load.customers[i].name)
      })

      GETCustomers.getCustomer(load.customers[i].id).should((response) => {
        const expectedResult = load.customers[i]

        expect(response.status, 'Validacao status').to.eq(200)
        expect(response.duration, 'Validacao timeout').to.lessThan(5000)

        expect(response.body[0].id).to.equal(expectedResult.id)
        expect(response.body[0].name).to.equal(expectedResult.name)
        expect(response.body[0].status).to.equal(expectedResult.status)
        expect(response.body[0].email).to.equal(expectedResult.email)

        PUTCustomers.changeCustomer(response.body[0]._id, load.customers_[i]).should((response) => {
          expect(response.status, 'Validacao status').to.eq(200)
          expect(response.status, 'Validacao alteracao').to.be.not.null
          expect(response.duration, 'Validacao timeout').to.lessThan(5000)
          expect(response.body.status).to.eq('CANCELADO')
        })

        DELETECustomers.deleteCustomer(response.body[0]._id).should((response) => {
          expect(response.status).to.eq(204)
          expect(response.duration).to.lessThan(5000)
        })
      })
    })
  }
})