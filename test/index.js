'use strict'

const path = require('path')
const Mocha = require('mocha')
const mocha = new Mocha({})
const debug = require('debug')('app:test')
const fs = require('fs')
const { sendFolder } = require('../config/parameters')


if (!fs.existsSync(sendFolder)){
    debug(`Creating '${sendFolder}' folder`)
    fs.mkdirSync(sendFolder, { mode: '0777' });
}

debug('Running tests')

// Test suites
mocha.addFile(path.resolve('test/functional/index.js'))
mocha.addFile(path.resolve('test/functional/app.js'))

// run tests
mocha.run()
    .on('test', function (test) {
    })
    .on('test end', function (test) {
    })
    .on('pass', function (test) {
    })
    .on('fail', function (test, err) {
        if (process.env.NOTIFY === 1) {
            debug({
                'title': test.title,
                'message': test.file
            })
        }
    })
    .on('end', async function () {
        process.exit()
    })
