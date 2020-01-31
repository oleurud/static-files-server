'use strict'

const storage = require('../services/storage')
const debug = require('debug')('app:managers:app')
const uuidv4 = require('uuid/v4')

module.exports = {
    async create (file) {
        // TODO: unzip. by now, it is a simple HTML

        // create folder
        const appFolder = uuidv4()

        storage.upload(file.path, {

        })
        .catch(error => {
            debug(error)
            throw error
        })
    }
}
