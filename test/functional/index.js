'use strict'

const assert = require('assert').strict
const app = require('../../index')
const request = require('supertest').agent(app)

describe('FUNCTIONAL API - INDEX', function () {
    it('should response ok (status)', function (done) {
        request
            .get('/')
            .expect(200)
            .end(function (err, res) {
                assert.ifError(err)
                assert.deepStrictEqual(res.body, {
                    'status': true,
                    'data': 'hi'
                })
                done()
            })
    })
})
