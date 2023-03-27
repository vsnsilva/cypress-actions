const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRiN2M1ZjE4LWU2NzItNDZhZS05MTE1LThkN2NlY2UyYzdmNC0xNjc5OTQ1MzYxNzQ0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYWU3OTdmZDMtYWJkZS00MWQyLTg3MjMtNTE0NGI2NjE3NmY1IiwidHlwZSI6InQifQ.Ce5WrWrQxPuiFsQVHgci649-fhsVM3Z7x8ta5bOQz_M'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
