'use strict'

const debug = require('debug')('app:middlewares:user')

module.exports = function getUser () {
    return function (req, res, next) {
        res.locals.user = 'fake-user'

        debug('user', res.locals.user)
        next()
    }
}
