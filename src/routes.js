const express = require('express')
const { inboxFolder } = require('../config/parameters')
const multer = require('multer')({ dest: inboxFolder })

const userMiddleware = require('./middlewares/user')

const mainController = require('./controllers/mainController')
const appController = require('./controllers/appController')

module.exports = function (app) {
    // Test
    app.get('/', mainController.index)

    // app
    let appRouter = express.Router({ mergeParams: true })
    appRouter.use(userMiddleware)
    app.use('/app', appRouter)

    appRouter.post(':app/file', multer.single('app'), appController.addFile)

    appRouter.get(':app/*', appController.getFile)
}
