import * as GETCustomers from '../requests/GET-Customers.request';

const idcliente = 1

describe('GET', () => {
  it('BUSCAR TODOS OS CLIENTES', () => {
    GETCustomers.getCustomers()

   .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.headers).property('content-type').to.eq('application/json; charset=utf-8')
      expect(response.duration).to.lessThan(5000)
      expect(response.body[0]).to.have.all.keys(
        '_id', 'id', 'name', 'status', 'email', '__v'
      )
      expect(response.body.length).to.be.eq(1)
    })
  })

  it('BUSCAR CLIENTE ESPECIFICO', () => {
    GETCustomers.getCustomer(idcliente).should((response) => {
      
      expect(response.body[0].name).to.equal('Roberval Alcantara')
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0]).property('id').to.be.a('number')

      expect(response.body[0].id).to.equal(1)
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0]).property('id').to.be.a('number')

      expect(response.body[0].status).to.equal('ATIVO')
      expect(response.body[0]).to.have.property('status')
      expect(response.body[0]).property('status').to.be.a('string')

    })
  })
})