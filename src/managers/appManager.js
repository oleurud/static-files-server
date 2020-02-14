'use strict'

const uuidv4 = require('uuid/v4')
const { host, port } = require('../../config/parameters')
const storage = require('../services/storage')
const exception = require('../services/customExceptions')
const debug = require('debug')('app:managers:app')

module.exports = {
    getFileStream (user, app, path) {
        const bucketPath = `${user}/${app}/${path}`
        return storage.downloadStream(bucketPath)
    },

    async addFile (user, app, file, { path }) {
        if (!file || ! path) {
            throw new exception.FieldValidationError("You must send a file and a path")
        }

        const bucketPath = `${user}/${app}/${path}`

        await storage
            .upload(file.path, bucketPath)
            .catch(error => {
                debug(error)
                throw error
            })

        return `${host}:${port}/app/${app}/${path}`
    }
}
