const express = require('express')
const multer = require('multer')({ dest: '/tmp/uploads/' })

const mainController = require('./controllers/mainController')
const appController = require('./controllers/appController')

module.exports = function (app) {
    // Test
    app.get('/', mainController.index)

    // app
    let appRouter = express.Router({ mergeParams: true })
    app.use('/app', appRouter)

    appRouter.post('/', multer.single('app'), appController.create)
    appRouter.get('*', appController.getOne)
}
