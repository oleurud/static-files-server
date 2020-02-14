'use strict'

const appManager = require('../managers/appManager')
const debug = require('debug')('app:controller:app')

module.exports = {

    async getFile (req, res, next) {
        try {
            const path = req.params['0']
            const extension = path.split('.').pop()
            if (extension === 'html')
                res.set('Content-Type', 'text/html')

            appManager
                .getFileStream(res.locals.user, req.params.app, path)
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
