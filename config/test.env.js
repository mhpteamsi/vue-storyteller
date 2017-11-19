'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'testing'),
  API_TOKEN: JSON.stringify(process.env.API_TOKEN || 'b1Ucl4d8aQHRFtab6aczTgtt')
})
