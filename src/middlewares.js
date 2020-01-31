'use strict'

const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = function (app) {
    app.set('x-powered-by', false)
    app.set('etag', false)

    app.use(cors())

    app.use(helmet())

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
}
