'use strict'

const errors = [
    {
        name: 'SomethingWasWrong',
        code: 666,
        message: 'Something was wrong',
        statusCode: 500
    },
    {
        name: 'NotFoundError',
        code: 404,
        message: 'Route not found',
        statusCode: 404
    }
]


class CustomExceptionBase extends Error {}

function getCustomException (defaults) {
    return class CustomException extends CustomExceptionBase {
        constructor ({ message = null, statusCode = null, name = null, code = null, error = null } = {}) {
            super(message || defaults.message)

            this.statusCode = statusCode || defaults.statusCode
            this.name = name || defaults.name
            this.code = code || defaults.code
            this.error = error
        }
    }
}

const customExceptions = {}
errors.forEach(error => {
    customExceptions[error.name] = getCustomException(error)
})

module.exports = customExceptions
module.exports.CustomException = CustomExceptionBase
