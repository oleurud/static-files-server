'use strict'

const appManager = require('../managers/appManager')

module.exports = {

    async getOne (req, res, next) {
        res.locals.response = 'hi'
        next()
    },

    async create (req, res, next) {
        try {
            res.locals.response = await appManager.create(req.file)
            next()
        } catch (error) {
            next(error)
        }

    }
}
