'use strict'
module.exports = {
  NODE_ENV: '"production"',
  API_ENV: JSON.stringify(process.env.API_ENV || 'production'),
  API_TOKEN: JSON.stringify(process.env.API_TOKEN || 'b1Ucl4d8aQHRFtab6aczTgtt')
}
