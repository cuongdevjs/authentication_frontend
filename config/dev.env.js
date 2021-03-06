'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PORT: 3000,
  BASE_URL_API: '"https://backend-authentication.herokuapp.com"'
})
