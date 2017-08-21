'use strict'

const fetch = require('node-fetch')

module.exports = async (path) => {
  const response = await fetch(`https://data.police.uk/api${path}`)
  return response.json()
}
