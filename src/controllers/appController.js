'use strict'

const appManager = require('../managers/appManager')
const debug = require('debug')('app:controller:app')

module.exports = {

    async getFile (req, res, next) {
        try {
            appManager
                .getFileStream(res.locals.user, req.params.app, req.params['0'])
                .on('error', next)
                .pipe(res)
        } catch (error) {
            next(error)
        }
    },

    async addFile (req, res, next) {
        try {
            res.locals.response = await appManager.addFile(res.locals.user, req.params.app, req.file, req.body)
            next()
        } catch (error) {
            next(error)
        }
    }
}
