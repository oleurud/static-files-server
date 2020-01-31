'use strict'

module.exports = {

    async index (req, res, next) {
        res.locals.response = 'hi'
        next()
    }
}
