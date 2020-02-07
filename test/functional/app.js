'use strict'

const assert = require('assert').strict
const app = require('../../index')
const request = require('supertest').agent(app)
const path = require('path')

const APP = 'testapp'

describe('FUNCTIONAL API - APP', function () {
    before(function () {
        this.file = path.resolve('test/fixtures/test.txt')
        this.path = 'testpath/filetest.txt'
    })

    it('adding file', function (done) {
        request
            .post(`/app/${APP}/file`)
            .field('path', this.path)
            .attach('file', this.file)
            .expect(200)
            .end((err, res) => {
                assert.ifError(err)
                assert.deepStrictEqual(res.body, {
                    'status': true,
                    'data': this.path
                })
                done()
            })
    })
})
