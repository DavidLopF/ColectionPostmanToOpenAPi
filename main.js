// Require Package
const postmanToOpenApi = require('postman-to-openapi')

// Postman Collection Path
const postmanCollection = './files/collection.json'
// Output OpenAPI Path
const outputFile = './files/openapi.yml'

// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })