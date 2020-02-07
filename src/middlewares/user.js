'use strict'

module.exports = function getUser () {
    return async function (req, res, next) {
        res.locals.user = 'fake-user'

        next()
    }
}
