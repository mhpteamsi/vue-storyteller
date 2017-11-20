'use strict'
module.exports = {
  NODE_ENV: '"production"',
  DEPLOY_PRIME_URL: JSON.stringify(process.env.DEPLOY_PRIME_URL || 'http://localhost'),
  API_TOKEN: JSON.stringify(process.env.API_TOKEN || 'b1Ucl4d8aQHRFtab6aczTgtt')
}
