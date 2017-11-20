'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  DEPLOY_PRIME_URL: JSON.stringify(process.env.DEPLOY_PRIME_URL || 'http://localhost:8080'),
  API_TOKEN: JSON.stringify(process.env.API_TOKEN || 'b1Ucl4d8aQHRFtab6aczTgtt')
})
