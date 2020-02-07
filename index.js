const parameters = require('./config/parameters')
const debug = require('debug')

const express = require('express')
const app = express()

require('./src/middlewares')(app)
require('./src/routes')(app)
require('./src/handlers')(app)

const port = parameters.port
app.listen(port, function () {
    debug('App listening ', port)
})

// Simple process log
process.on('exit', function () {
    debug('exit')
})
process.on('SIGINT', function () {
    debug('sigint')
    process.exit(1)
})

process.on('uncaughtException', function (err) {
    debug('uncaughtException', err)
})

module.exports = app
