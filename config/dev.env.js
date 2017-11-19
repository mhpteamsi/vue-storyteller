'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENV: JSON.stringify(process.env.API_ENV || 'development'),
  API_TOKEN: JSON.stringify(process.env.API_TOKEN || 'b1Ucl4d8aQHRFtab6aczTgtt')
})
