'use strict'

const { bucketName } = require('../../config/parameters').GCS
const { Storage } = require('@google-cloud/storage')
const debug = require('debug')('app:services:storage')

const storage = new Storage()

module.exports = {
    async upload(filename, destination) {
        // Uploads a local file to the bucket
        const r = await storage.bucket(bucketName).upload(filename, {
            // Support for HTTP requests made with `Accept-Encoding: gzip`
            gzip: true,
            // By setting the option `destination`, you can change the name of the
            // object you are uploading to a bucket.
            destination,
            metadata: {
                // Enable long-lived HTTP caching headers
                // Use only if the contents of the file will never change
                // (If the contents will change, use cacheControl: 'no-cache')
                cacheControl: 'public, max-age=31536000',
            },
        })

        debug(r)
        debug(`${filename} uploaded to ${bucketName}.`);
    }
}
