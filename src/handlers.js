'use strict'

const exception = require('./services/customExceptions')
const debug = require('debug')('app:handlers')

module.exports = function (app) {
    // 404
    app.use(function (req, res, next) {
        if (!res.locals.response) {
            return next(new exception.NotFoundError())
        }

        return next()
    })

    app.use(function (req, res, next) {
        const response = {
            status: true,
            data: res.locals.response
        }

        return res.json(response)
    })

    // 50x
    app.use(function (err, req, res, next) {
        debug(err)

        if (!(err instanceof exception.CustomException)) {
            err = new exception.SomethingWasWrong(err)
            err.code = 500
        }

        const response = {
            status: false,
            error: {
                code: err.code,
                message: err.message
            }
        }

        if (err.error) {
            response.error.data = {
                error: err.error
            }
        }

        return res.status(err.statusCode).json(response)
    })
}
