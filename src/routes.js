const express = require('express')

const mainController = require('./controllers/mainController')

module.exports = function (app) {
    // Test
    app.get('/', mainController.index)

}
