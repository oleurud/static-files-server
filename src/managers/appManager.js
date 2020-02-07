'use strict'

const uuidv4 = require('uuid/v4')
const storage = require('../services/storage')
const exception = require('../services/customExceptions')
const debug = require('debug')('app:managers:app')

module.exports = {
    async create (user, { name }) {
        const app = name || uuidv4()
        const appFolder = `${user}/${app}/`
        debug(app, appFolder)
        // create folder in Google Storage
        storage.upload(appFolder)

        return app
    },

    async addFile (user, app, file, { path }) {
        if (!file || ! path) {
            throw new exception.FieldValidationError("You must send a file and a path")
        }

        const bucketPath = `${user}/${app}/${path}`

        storage.upload(file.path, bucketPath)
        .catch(error => {
            debug(error)
            throw error
        })

        return path
    }
}
