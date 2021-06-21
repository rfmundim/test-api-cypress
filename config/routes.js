const express = require('express')

function sleep(ms) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   });
}

module.exports = function (server) {

   const router = express.Router()

   server.use('/api', router)

   const customerService = require('../api/customer/customerService')

   customerService.register(router, '/customers')

   router.get('/customers/id/:id', (req, res) => {
      const id = req.params.id

      customerService.find({ 'id': id }, async function (err, customer) {
         if (err) throw err

         if (!customer) {
            return next()
         }


         if (Object.keys(customer).length === 0) {
            res.status(404).json({})
         } else {
            if (id == 14) {
               // TESTE TIMEOUT
               //await sleep(5000)
               res.json(customer)
            } else {
               res.json(customer)
            }
         }
      })
   })

   router.get('/customers/name/:name', (req, res) => {
      const name = req.params.name
      var query = { name: { $regex: new RegExp(name, 'ig') } }

      customerService.find(query, function (err, customer) {
         if (err) throw err

         if (!customer) {
            return next();
         }

         if (Object.keys(customer).length === 0) {
            res.status(404).json({})
         } else {
            res.json(customer);
         }
      })
   })
}